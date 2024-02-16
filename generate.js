import openaiClient from './api.js'

const generate = async (queryDescription) => {

    const davinci = async (queryDescription) => {
        const response = await openaiClient.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: `Convert the following natural language description into a SQL Query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0
        })
        return response.data.choices[0].text
    }

    const chatgptapi = async (queryDescription) => {
        const messages = [
            {role: "system", content: `you are a translator from plan english to sql`},
            {role: "assistant", content: `SELECT * FROM users:`},
            {role: "user", content: `Convert the following natural language description into a SQL Query: \n\n${queryDescription}.`}
             ];
        const response = await openaiClient.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,            
        })
        return response.data.choices[0].message.content

    }

    return await davinci(queryDescription)

    
}

export default generate;



