const { Configuration, OpenAIApi } = require('openai');



const openai = new OpenAIApi(new Configuration({
  apiKey: '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',
}));

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(data.choices[0].text);
  return res.data.choices[0].text;
}
