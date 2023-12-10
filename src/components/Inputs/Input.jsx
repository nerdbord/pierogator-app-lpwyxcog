import { useState, useEffect } from 'react'
import useChatGPT from '../../hooks/useGenerate'
import styles from './Input.module.scss'
import buttonLock from '/Button.svg'

function Input({name}) {
  const [value, setValue] = useState('wpisz, wygeneruj lub zostaw puste')
  const [isEditing, setIsEditing] = useState(false)
  const { generatedText, generateDough } = useChatGPT();

    useEffect(() => {
        generateDough({name})
        console.log(generatedText);
    },[])
 
  const handleGenerateButtonClick = () => {
    generateDough({name})
  setValue(generatedText);
  console.log(generatedText)
    }
 
  

  const handleInputOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleInputOnClick = (e) => {
    setValue('')
  }

  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
      >
        {/* эту кнопку я вынес в отдельный компонент батонлок  */}
        {/* и по приколу повесил событие которое генерирует мой запрос с чатом гпт */}
        <button
          className={styles.imageButton}
          onClick={handleGenerateButtonClick}
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={buttonLock} />
        </button>

        <input type="text" id="uname" name="name" value={value} onChange={handleInputOnChange} onClick={handleInputOnClick} />
      </div>
    </>
  )
}
export default Input
