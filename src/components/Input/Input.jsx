import { useState, useEffect } from 'react'
import useChatGPT from '../../hooks/useGenerate'
import styles from './Input.module.scss'
import ButtonLock from '../ButtonLock/ButtonLock'
import { useDispatch } from 'react-redux'
import { inputsActions } from '../../store/index';
function Input({ name, valueInput }) {
  const [value, setValue] = useState('wpisz, wygeneruj  lub zostaw puste')
  const { generatedText, generateDough } = useChatGPT()
const dispatch = useDispatch();
  // useEffect(() => {
  //   generateDough({ name })
  //   console.log(generatedText)
  // }, [])
useEffect(()=> {
  setValue(valueInput)
}, [valueInput] )

  const handleInputOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleInputOnClick = (e) => {
    setValue('')
  }
  const handleBlur = (e) => {
    const objInput = {name};
    const objDesc = {
      'name' : [objInput.name],
      'description' : e.target.value
    }
    console.log('lost focus')
console.log(objDesc)
    console.log(e.target.value)
 dispatch(inputsActions.getDescription(objDesc)) 
  }

  return (
    <div className={styles.input_container}>
      <ButtonLock name={name} />
      <input
        type="text"
        id="uname "
        name={name}
        value={value}
        onChange={handleInputOnChange}
        onClick={handleInputOnClick}
        onBlur={handleBlur}
      />
    </div>
  )
}
export default Input
