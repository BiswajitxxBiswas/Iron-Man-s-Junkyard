// controllers/scrapRequestController.js

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utills/error/app-error');
const { SuccessResponse, ErrorResponse } = require('../utills/common');
const { ScrapRequest, ScrapItem , User , ScrapDealer } = require('../models');
const {Noti} = require("../utills/common")
/**
 * Creates a scrap request if the requested quantity is available.
 */
const createScrapRequest = async (req, res) => {
    try {
        const { scrapDealerId, userId, scrapItemId, quantity, pickupDateTime } = req.body;

        // Check if item exists and has sufficient quantity
        // const item = await ScrapItem.findOne({ where: { id: scrapItemId, scrapDealerId } });
        console.log("scrap item id -->"+ scrapItemId) ;
        const item = await ScrapItem.findOne({ 
            where: { 
                id: 1 ,
            } });
        console.log("item in create scrap request in controller = " + item) ;
        console.log("item.quantity = " + item.quantity) ;
        if (!item || item.quantity < quantity) { 
            ErrorResponse.message = 'Requested quantity not available.';
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }

        // Create the scrap request
        const newRequest = await ScrapRequest.create({
            scrapDealerId,
            userId,
            scrapItemId,
            quantity,
            pickupDateTime,
            status: 'pending'
        });

        const userResponse = await User.findByPk(userId) ;
        const scrapDealerResponse = await ScrapDealer.findByPk(userId) ;

        const userEmail = userResponse.email ;
        const scrapDealerEmail = scrapDealerResponse.email ;

        console.log("user email in controller for notification service --> " + userEmail) ;
        console.log("scrapDealer email in controller for notification service --> " + scrapDealerEmail) ;

        const data = {
            sender :userEmail ,
            recepient : scrapDealerEmail ,
            sub : "New Request" ,
            text : "have you any scrap part" ,
        }

        Noti.notification(data) ;

        // Return success response
        SuccessResponse.data = newRequest;
        SuccessResponse.message = 'Scrap request created successfully';
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);

    } catch (error) {
        // Handle errors and return error response
        console.log("---> " + error) ;
        ErrorResponse.message = 'Error creating scrap request';
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};

/**
 * Accepts a scrap request if there is enough stock.
 * Deducts the requested quantity from the stock and marks the request as 'completed'.
 */
const acceptRequest = async (req, res) => {
    try {
        // console.log("inout coming in accept request in scrapRequestController--> " + req) ;
        const { id } = req.params;

        // Find the scrap request
        const request = await ScrapRequest.findByPk(id);
        if (!request) {
            ErrorResponse.message = 'Request not found.';
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
        }

        // Check if the item has enough quantity
        const item = await ScrapItem.findByPk(request.scrapItemId);
        if (item.quantity < request.quantity) {
            ErrorResponse.message = 'Insufficient stock for acceptance.';
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }

        // Update item quantity and request status
        await item.update({ quantity: item.quantity - request.quantity });
        await request.update({ status: 'completed' });

        const userResponse = await User.findByPk(request.userId) ;
        const scrapDealerResponse = await ScrapDealer.findByPk(request.scrapDealerId) ;

        const userEmail = userResponse.email ;
        const scrapDealerEmail = scrapDealerResponse.email ;

        console.log("user email --> " + userEmail) ;
        console.log("scrap dealer email --> " + scrapDealerEmail) ;

        const data = {
            sender :scrapDealerEmail ,
            recepient : userEmail ,
            sub : "thanku for purching this items" ,
            text : "hope you find all this item in good condition, please contact for any issue" ,
        }

        Noti.notification(data) ;

        // Return success response
        SuccessResponse.message = 'Request accepted and stock updated.';
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        // Handle errors and return error response
        ErrorResponse.message = 'Error accepting scrap request';
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};

/**
 * Rejects a scrap request by marking its status as 'cancelled'.
 */
const rejectRequest = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the scrap request
        const request = await ScrapRequest.findByPk(id);
        if (!request) {
            ErrorResponse.message = 'Request not found.';
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
        }

        // Update request status to 'cancelled'
        await request.update({ status: 'cancelled' });

        const userResponse = await User.findByPk(request.userId) ;
        const scrapDealerResponse = await ScrapDealer.findByPk(request.scrapDealerId) ;

        const userEmail = userResponse.email ;
        const scrapDealerEmail = scrapDealerResponse.email ;

        console.log("user email --> " + userEmail) ;
        console.log("scrap dealer email --> " + scrapDealerEmail) ;

        const data = {
            sender :scrapDealerEmail ,
            recepient : userEmail ,
            sub : "Sorry currently we can't accept your purchase request for this item" ,
            text : "here is the details of not completing your request" ,
        }

        Noti.notification(data) ;


        // Return success response
        SuccessResponse.message = 'Request rejected.';
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        // Handle errors and return error response
        ErrorResponse.message = 'Error rejecting scrap request';
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};

module.exports = {
    createScrapRequest,
    acceptRequest,
    rejectRequest
};
