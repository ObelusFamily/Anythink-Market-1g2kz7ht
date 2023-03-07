const { Configuration, OpenAIApi } = require("openai");

async function generateAiImage(title) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: title,
    n: 1,
    size: "256x256",
  });

 return response.data.data[0].url;
}

module.exports = {
  generateAiImage,
}