import { useState } from 'react'
import axios from 'axios'

const useChatGPT = () => {
  const [generatedText, setGeneratedText] = useState('')

  const generateDough = async () => {
    try {
      const response = await axios.post(
        'https://training.nerdbord.io/api/v1/openai/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
              role: 'user',
              content:
                'Zgeneruj 4 randomowe skladniki do ciasta.Wymień w postaci 1-...,2-...,3-... ',
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              '76b58dd78e72e915710ae859ef0b61a79e072a51ddf96dcb29c7881a621ecdbc',
          },
        }
      )

      setGeneratedText(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Error generating :', error)
    }
  }

  return { generatedText, generateDough }
}

export default useChatGPT
