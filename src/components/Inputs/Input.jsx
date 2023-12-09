import styles from "./Input.module.scss"
import buttonLock from "/Button.svg"
function Input(){
return(
    <>
    <div style={{
        position: "relative"
    }}>
    <button className={styles.imageButton}
    style={{
        padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer'
    }} 
    >
        <img src={buttonLock} />

    </button>
    <input type="text" id="uname" name="name" value="wpisz, wygeneruj lub zostaw puste" />
    </div>
    </>
)
}
export default Input;