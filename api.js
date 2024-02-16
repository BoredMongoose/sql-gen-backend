import { Configuration, OpenAIApi } from "openai";
import keyy from "./apikey.js"

const openaiApiKey = keyy

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set')
   
}

const configuration = new Configuration({
    apiKey: openaiApiKey
})

const openai = new OpenAIApi(configuration)

export default openai