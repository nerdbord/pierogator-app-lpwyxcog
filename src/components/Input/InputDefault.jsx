import styles from './Input.module.scss'
import { useState } from 'react'
function InputDefault ({inputTitle, valueInput}){
  const [value, setValue] = useState(valueInput)
  console.log(valueInput)
  console.log(value)
    const handleInputOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleInputOnClick = (e) => {
      setValue('')
    }
    const container = {
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        alignItems: 'flexStart',
        width: '343px'
      
    }

    return(
        <>
         <div style={container}>
             <h3>{inputTitle}</h3>
             <div className={styles.input_container}>
      <input
        type="text"
        id="uname"
        value={value}
        onChange={handleInputOnChange}
        onClick={handleInputOnClick}
       />
    </div>
    </div>
        </>
    )
}
export default InputDefault;