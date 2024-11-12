const OpenAI = require('openai');
const { ServerConfig } = require('../../config');
const { ScrapItem } = require('../../models');

const client = new OpenAI({
    apiKey: ServerConfig.OPENAI_APIKEY,
});

async function GenSuggestion(userPreferences) {
    try {
        // Fetch all items from the ScrapItem table
        const items = await ScrapItem.findAll({ raw: true });

        // Format items as a list for the prompt
        const itemList = items.map(item => `- ${item.name} (Price: $${item.price.toFixed(2)})`).join('\n');

        // Construct a prompt with user preferences and items list
        const prompt = `
            Here are the available items:
            ${itemList}
            
            Based on the user's preferences: "${userPreferences}", please suggest the most suitable items for purchase.
        `;

        // Send the prompt to OpenAI's API with "gpt-40-mini" model
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });

        // Extract and return the response from GPT
        const suggestion = chatCompletion.choices[0].message.content;
        return suggestion;

    } catch (error) {
        console.error("Error generating suggestion:", error);
        throw error;
    }
}

module.exports = {
    GenSuggestion
};



/*
* To use this ->
* console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    const userPreferences = "The customer wants to build a helmet or a cycle.";
    const result = await openAi.GenSuggestion(userPreferences);
    console.log(result);
* */