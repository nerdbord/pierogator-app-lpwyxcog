
import Header from '../layouts/AppHeader/Header/Header'
import { Outlet, useNavigate } from "react-router-dom";
function Root() {
  return (
 <>
 <Header />
 <Outlet /> 

 </>

  )
}
export default Root
