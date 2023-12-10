import Input from '../../components/Input/Input'
import { InputField } from './InputField/InputField'
import styles from './SectionContent.module.scss'

function SectionContent() {
  return (
    <>
      <section className={styles.container}>
        <InputField inputTitle="Ciasto" />
        <InputField inputTitle="Nadzienie" />
        <InputField inputTitle="Składniki" />
      </section>
    </>
  )
}
export default SectionContent
