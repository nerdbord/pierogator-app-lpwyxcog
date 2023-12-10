import useChatGPT from '../../hooks/useGenerate'
import styles from './Input.module.scss'
import buttonLock from '/Button.svg'
function Input() {
  const { generatedText, generateDough } = useChatGPT()
  const handleGenerateButtonClick = () => {
    generateDough()
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
        <input type="text" id="uname" name="name" value={generatedText} />
      </div>
    </>
  )
}
export default Input
