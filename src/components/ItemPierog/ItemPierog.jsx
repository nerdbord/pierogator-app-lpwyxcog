import styles from './ItemPierog.module.scss'
function ItemPierog(props){
return(
    <>
    <div className={styles.itemContainer}>
<img width="162" height="110"  className={styles.imageContainer} loading="eager" fetchpriority="high" ng-img="true" src={props.img} />
<span  className={styles.containerName}>{props.name}</span>
</div>
    </>
)
}
export default ItemPierog;