import ItemPierog from "../../../components/ItemPierog/ItemPierog";
import NavigateNameLogo from "../../../components/Nav/NavigateNameLogo";
import styles from "./PierogarniaLayOut.module.scss"
function Pierogarnia({items}){

return(
    <>
    <div className={styles.container}> 
    <h1 style={{color:"black"}}>New added items here</h1>
    </div>
    <section className={styles.container}> 
    <NavigateNameLogo title="Pierogarnia" />
    <div className={styles.listContainer}>
    {items && items.map(element => {
        console.log(element[1])
        return <ItemPierog name={element[1].name} img={element[1].image} />
    })}
    </div>
    </section>
        
    </>
)
}
export default Pierogarnia;