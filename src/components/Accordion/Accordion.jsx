import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import { generateRecipe } from '../../hooks/useRecipeGenerate'
import { useSelector } from 'react-redux'
import { NavComponent } from '../../layouts/InputsSection/Navigation/NavComponent'
import Button from '../ButtonCta/ButtonCta'
import { NavLink } from 'react-router-dom'
import { getDatabase, ref, child, push, update } from "firebase/database";
export const Accordion = () => {
  const objRecipe = useSelector((state) => state.recipe.recipes[0])
  const [recipeData, setRecipeData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const sklad = objRecipe?.['składniki']
  const ciasto = objRecipe?.['ciasto']
  const farsh = objRecipe?.['nadzienie']

  const fetchData = async (ciasto, sklad, farsh) => {
    try {
      const result = await generateRecipe(sklad, ciasto, farsh)
      setRecipeData(result)
    } catch (error) {
      console.error('Error fetching or processing recipe data:', error)
    } finally {
      setIsLoading(false)
    }
  }
  function handleAddDB(){
    const db = getDatabase();
 const postData = {
 image: objRecipe.image,
 name: objRecipe.name
};
const newPostKey = push(child(ref(db), 'pierogarnia')).key;
const updates = {};
updates['/pierogarnia/' + newPostKey] = postData;
update(ref(db), updates);
  }

  return (
    <div>
      <NavComponent
        title="Przepis"
        onClickFunction={() => fetchData(ciasto, sklad, farsh)}
        buttonText="Generuj"
        isLoading={isLoading}
      />
      <h2>Uwagi do przepisu</h2>

      {recipeData ? (
        <>
          {/* {recipeData.ingredients.dough.map((ingredient, index) => ( */}
          <AccordionItem
            sections={recipeData?.ingredients?.dough || []}
            title="ciasto"
            isAccordionOpen={true}
            // key={index}
            // index={index}
            // ingredient={ingredient}
            // isActive={index === activeIndex}
            // onClick={() => handleAccordionItemClick(index)}
          />
          {/* ))} */}

          {/* <h2>Fill:</h2>
          {recipeData.ingredients.filling.map((ingredient, index) => ( */}
          <AccordionItem
            sections={recipeData.ingredients?.filling || []}
            title="farsz"
            isAccordionOpen={true}
          />

       <NavLink to='/list'>  <Button> <span onClick={handleAddDB}>Udostępnij pieroga</span> </Button> </NavLink> 
          {/* ))} */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
