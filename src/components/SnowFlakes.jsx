import styles from "../components/Flakes.module.css"
import SnowFlake from "./SnowFlake";

function SnowFlakes(){
    const flakesArr = Array.from({length:10})

    return (
        <>

        <div className={styles.snowflakes} aria-hidden="true">
  {flakesArr.map((e, ind)=>{
return <SnowFlake key={ind} />
  })}
</div>

        </>
    )
}
export default SnowFlakes;