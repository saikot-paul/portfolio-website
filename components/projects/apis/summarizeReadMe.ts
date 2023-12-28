import axios from 'axios'
import { chatHistory } from './chatHistory'

type projectType = {
    language: string[];
    name: string;
    readme: string;
};

export const summarizeReadMe = async (element: projectType) => {

    const cohereToken = process.env.COHERE_TOKEN;
    const cohereVersion = '2021-11-08';
    const message = `Here's the README for my ${element.name} project: ${element.readme}. Please provide a summary in first person, focusing on the key features, implementation details, and technologies used. The summary should be concise, 150 words maximum, and highlight the project's most important aspects and similar to those you sent before. Thank you.`;
    const postData = { 
        model: "command",
        message: message,
        chatHistory : chatHistory,
        promptTruncation: "AUTO",
        citationQuality: "accurate",
        connectors: [],
        documents: []
    }
    

    axios.post('https://api.cohere.ai/chat', postData, { 
        headers : { 
            'Authorization' : `Bearer ${cohereToken}`, 
            'Content-Type' : 'application/json', 
            'Cohere-Version' : cohereVersion
        }
    })
    .then(response => { 
        console.log('--------------------------------------------------------------------------------------------');
        console.log(response.data.text);
    });
} 
