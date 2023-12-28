import { ImageSection } from '../layouts/ImageSection/ImageSection'
import { useDispatch, useSelector } from 'react-redux'
import InputDefault from '../components/Input/InputDefault'
import AccordionItem from '../components/Accordion/AccordionItem/AccordionItem'
function Recipe() {
  const objRecipe = useSelector((state) => state.inputs.recipes[0])
  console.log(objRecipe)
  return (
    <>
      <img
        src={objRecipe.image}
        alt="Generated Image"
        style={{ maxWidth: '343px', maxHeight: '233px' }}
      />
      <InputDefault
        onChange={false}
        inputTitle="Nazwa pieroga"
        valueInput={objRecipe.name}
      />
    </>
  )
}
export default Recipe
