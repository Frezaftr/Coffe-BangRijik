import { NavLink } from 'react-router-dom'
import { HeaderContainer, NotificationBadge } from './styles'
import { ShoppingCart, MapPin} from 'phosphor-react'
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";

// import LogoCoffe from '../../assets/LogoCoffe.svg'
import LogoCoffe from '../../assets/LogoCoffe2.jpg'



export function Header() {
  const {coffeList} = useContext(CoffeContext)
  const amountCoffes = coffeList.reduce((total, coffeUser) => {
    return total + coffeUser.amount
  }, 0)
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/Coffee_delivery/" title="Home">
          <img src={LogoCoffe} alt="" />
        </NavLink>
      </span>
      <div>
        <span>
          < MapPin size={22} weight="fill"/>
          <p>Indonesia, Jakarta</p>
        </span>
        <nav>
          <NotificationBadge>{amountCoffes}</NotificationBadge>
          <NavLink to="/Coffee_delivery/cart" title="Cart">
            <ShoppingCart size={22} weight="fill"/>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
