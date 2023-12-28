import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import { generateRecipe } from '../../hooks/useRecipeGenerate'

export const Accordion = () => {
  const [recipeData, setRecipeData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await generateRecipe()
        setRecipeData(result)
      } catch (error) {
        console.error('Error fetching or processing recipe data:', error)
      }
    }

    fetchData()
  }, [])

  if (!recipeData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Recipe</h1>
      <h2>Dough:</h2>
      <ul>
        {recipeData.ingredients.dough.map((ingredient, index) => (
          <li key={index}>{`${ingredient.name}: ${ingredient.quantity}`}</li>
        ))}
      </ul>

      <h2>Filling:</h2>
      <ul>
        {recipeData.ingredients.filling.map((ingredient, index) => (
          <li key={index}>{`${ingredient.name}: ${ingredient.quantity}`}</li>
        ))}
      </ul>
    </div>
  )
}
