import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '<YOUR_OPENAI_API_KEY>',
});

const openai = new OpenAIApi(configuration);

export const openaiAPICall = async (prompt: string) => {
  try {
    const response = await openai.createCompletion(
      {
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
    );

    const result = response.data.choices[0].text;

    return result;
  } catch (error) {
    console.error('Error=======>', error);
    return error;
  }
};
