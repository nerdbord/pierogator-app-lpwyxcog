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
  const handleButtonClick = () => {
    console.log(objInputs)
    generateImage(
      `zgeneruj obrazek pieroga. Dane: ciasto (${objInputs['Ciasto']}), nadzienie (${objInputs['Nadzienie']}), składniki (${objInputs['Składniki']}) `
    )
  }
  console.log('isLoading: ', isLoading)
  return (
    <div>
      <NavComponent
        onClickFunction={handleButtonClick}
        buttonText="Generuj"
        title="Pieróg"
        isLoading={isLoading}
      />
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
