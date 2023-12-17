import axios from 'axios'

async function generateDough(name) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          {
            role: 'user',
            content: `Zgeneruj 4 randomowe skladniki do ${name}. Pisz tylko listę składników`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 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',
        },
      }
    )
    let results = await response.data.choices[0].message.content

    return results
  } catch (error) {
    console.error('Error generating :', error)
  }
}

export default generateDough
