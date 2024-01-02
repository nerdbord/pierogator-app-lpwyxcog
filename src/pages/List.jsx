import { db } from "../firebase";
import { getDatabase, ref, set, get,child } from "firebase/database";
import Pierogarnia from "../layouts/AppLayout/PierogarniaSection/PierogarniaLayOut";
import { useEffect, useState } from "react";

function List(){
    const dbRef = ref(db);
    const[valueItem,setValueItem] = useState([]);
    useEffect(()=> {
        get(child(dbRef, `/pierogarnia`)).then((snapshot) => {
            if (snapshot.exists()) {
              setValueItem(Object.entries(snapshot.val()))
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    },[])
console.log(valueItem)
return(
    <>
    {/* //moje własne pirogie section */}
    <Pierogarnia items={valueItem} />
    </>
)
}
export default List;