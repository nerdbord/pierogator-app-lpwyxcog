import SnowFlakes from '../SnowFlakes/SnowFlakes'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'
import { useDispatch } from 'react-redux'
import { inputsActions, fetchTo } from '../../../store/index'

function Header() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(inputsActions.getItems())
    dispatch(fetchTo())
  }
  return (
    <>
      <header>
        <SnowFlakes />
        <h1>Pierogator świąteczny</h1>
      </header>

      <NavComponent
        title="Skladniki"
        onClickFunction={handleClick}
        buttonText="Generuj"
      />
    </>
  )
}
export default Header
