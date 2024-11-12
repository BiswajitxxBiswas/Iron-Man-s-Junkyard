
const mailSender = require("../../config/email-config")

async function notification(data){
    try {
        const response = await mailSender.sendMail({
            // from: userEmail,
            from: data.sender ,
            to: data.recepient ,
            subject: data.sub , 
            text: data.text ,
        });
        console.log("Queue is up");
        // console.log("Mail response:", response);
    } catch (error) {
        console.log("Mail sending error:---> ", error);
    }
}

module.exports ={
    notification ,
} 