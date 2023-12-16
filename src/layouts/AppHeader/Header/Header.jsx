import Button from '../../../components/Button/Button'
import SnowFlakes from '../SnowFlakes/SnowFlakes'
import SnowFlakesIcon from '@icons/SnowFlake.svg?react'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(inputsActions.fisrtLoadItems())
  // },[])
  return (
    <>
      <header>
        <SnowFlakes />
        <h1>Pierogator świąteczny</h1>
      </header>

      <NavComponent title="Skladniki" />
    </>
  )
}
export default Header
