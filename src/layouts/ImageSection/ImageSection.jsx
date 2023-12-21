import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavComponent } from '../InputsSection/Navigation/NavComponent'
import useImageGeneration from '../../hooks/useImgGenerate'
import useNameGeneration from '../../hooks/useNameGenerate'
import { useDispatch, useSelector } from 'react-redux'
import InputDefault from '../../components/Input/InputDefault'
import Button from '../../components/ButtonCta/ButtonCta'
import { inputsActions } from '../../store'
export const ImageSection = () => {
  const dispatch = useDispatch();
  
  const { generatedImages, isLoading, generateImage } = useImageGeneration()
  const { generatedNames, generateName} = useNameGeneration();
  let objInputs
  const inputsDescription = useSelector((state) => state.inputs.items)

  if (inputsDescription.length > 0) {
    objInputs = JSON.parse(inputsDescription)
  }
  const handleButtonClick = () => {
    generateImage(
      `zgeneruj obrazek pieroga. Dane: ciasto (${objInputs['Ciasto']}), nadzienie (${objInputs['Nadzienie']}), składniki (${objInputs['Składniki']}) `
    )
    generateName(`zgeneruj nazwę pieroga z dwóch trzech słów znając go nadzienie (${objInputs['Nadzienie']})`)
  }

  function handleSaveData(){
    const recipe = {
      'name': generatedNames,
      'image': generatedImages,
      'ciasto': objInputs['Ciasto'],
      'nadzienie': objInputs['Nadzienie'],
      'składniki': objInputs['Składniki']
    }
    console.log('recipe')
dispatch(inputsActions.addRecipes(recipe))
  }
  return (
    <div>
      <NavComponent
        onClickFunction={handleButtonClick}
        buttonText="Generuj"
        title="Pieróg"
        isLoading={isLoading}
      />
      {generatedImages && (
       <> <img
          src={generatedImages}
          alt="Generated Image"
          style={{ maxWidth: '343px', maxHeight: '233px' }}
        />
        <InputDefault onChange={true} inputTitle="Nazwa pieroga" valueInput={generatedNames} />
    <div style={{padding: '24px 0'}}>
    <Button > <NavLink to="/recipe"><span onClick={handleSaveData}>Zapisz i przejdź do tworzenia przepisu</span></NavLink></Button>
    </div>
     
        </>
      )}
      
    </div>
  )
}
