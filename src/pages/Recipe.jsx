import { ImageSection } from '../layouts/ImageSection/ImageSection'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
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
=======
import InputDefault from "../components/Input/InputDefault";
function Recipe(){
const objRecipe = useSelector((state) => {
    const lengthArrayRecipes = state.recipe.recipes.length;
    console.log(state.recipe.recipes);
    if(lengthArrayRecipes > 0){
     return state.recipe.recipes[lengthArrayRecipes-1]
    }
    return state.recipe.recipes[0]
});
console.log(objRecipe)
    return(
        <>
       <img
          src={objRecipe.image}
          alt="Generated Image"
          style={{ maxWidth: '343px', maxHeight: '233px' }}
        />
        <InputDefault onChange={false} inputTitle="Nazwa pieroga" valueInput={objRecipe.name} />
        </>
    )
>>>>>>> a66fcaa054b8595f783a64c247f4ddd5c8c465e9
}
export default Recipe
