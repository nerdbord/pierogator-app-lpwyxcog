import Button from '../../../components/Button/Button'
import SnowFlakes from '../SnowFlakes/SnowFlakes'
import SnowFlakesIcon from '@icons/SnowFlake.svg?react'
import { NavComponent } from '../../InputsSection/Navigation/NavComponent'

function Header() {
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
