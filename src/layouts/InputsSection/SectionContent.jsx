import Input from '../../components/Input/Input'
import { InputField } from './InputField/InputField'
import styles from './SectionContent.module.scss'
import { useSelector, useDispatch } from 'react-redux';
function SectionContent() {
  let objInputs;
  const bio = useSelector(state => state.inputs.items);
 if(bio.length > 0){
  objInputs =  JSON.parse(bio)
 }
 
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
