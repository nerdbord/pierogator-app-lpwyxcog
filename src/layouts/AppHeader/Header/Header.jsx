import SnowFlakes from '../SnowFlakes/SnowFlakes'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'
import { useDispatch, useSelector } from 'react-redux'
import { inputsActions, fetchTo } from '../../../store/index'


function Header() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.inputs.isLoading);
  const handleClick = () => {
    dispatch(inputsActions.getItems())
    dispatch(fetchTo());
  }
  return (
    <>
      <header>
        <SnowFlakes />
        <h1>Pierogator świąteczny </h1>
      </header>

      <NavComponent
        title="Skladniki"
        onClickFunction={handleClick}
        buttonText="Generuj"
        isLoading={isLoading}
      />
    </>
  )
}
export default Header
