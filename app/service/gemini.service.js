import { GoogleGenerativeAI } from '@google/generative-ai';
// import { config } from '../utils/config';

const GeminiService = (function () {
  const MODEL_NAME = 'gemini-pro';
  const API_KEY = 'AIzaSyClUfKgEEueQcF-dtQi4zfTM38A0YaG-nc';
  const genAI = new GoogleGenerativeAI(API_KEY);
  const service = {};

  service.sendMessages = async function (message, prevChat) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    console.log(prevChat, 'emssdfdfdfdf');

    const chat = model.startChat({
      history: prevChat,
    });
    const result = await chat.sendMessageStream(message);
    return result.stream;
  };

  return service;
})();

export default GeminiService;
