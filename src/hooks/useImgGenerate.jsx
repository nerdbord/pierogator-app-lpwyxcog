// useImageGeneration.js
import { useState } from 'react'
import axios from 'axios'

const useImageGeneration = () => {
  const [generatedImages, setGeneratedImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const TEAM_API_KEY =
    'ccdbc6d22ae9520cf81c0f812abb6ed95055717f247604cc855fa9acaae05ccb'

  const generateImage = async (prompt) => {
    setIsLoading(true)

    try {
      const response = await axios.post(
        'https://training.nerdbord.io/api/v1/openai/images/generations',
        {
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: TEAM_API_KEY,
          },
        }
      )

      const imagesData = response.data.data[0].url || []
      setGeneratedImages(imagesData)
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { generatedImages, isLoading, generateImage }
}

export default useImageGeneration
