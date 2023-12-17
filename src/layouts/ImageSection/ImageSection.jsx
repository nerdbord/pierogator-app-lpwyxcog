import React from 'react'
import { NavComponent } from '../InputsSection/Navigation/NavComponent'
import useImageGeneration from '../../hooks/useImgGenerate'

import { useSelector } from 'react-redux'

export const ImageSection = () => {
  const { generatedImages, isLoading, generateImage } = useImageGeneration()
  let objInputs
  const inputsDescription = useSelector((state) => state.inputs.items)

  if (inputsDescription.length > 0) {
    objInputs = JSON.parse(inputsDescription)
  }

  //тут не могу добраться до значений инпута
  const handleButtonClick = () => {
    generateImage(`zgeneruj obrazek pieroga `)
  }

  return (
    <div>
      <NavComponent />
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Image'}
      </button>
      {generatedImages && (
        <img
          src={generatedImages}
          alt="Generated Image"
          style={{ maxWidth: '343px', maxHeight: '233px' }}
        />
      )}
    </div>
  )
}
