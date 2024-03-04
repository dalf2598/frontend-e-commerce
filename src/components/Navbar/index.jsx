import { Logo } from '../../assets/Logo'
import { CartLogo } from '../../assets/CartLogo'
import { Search } from './Search'
import './Navbar.css'

function Navbar({setShowCart}) {
    return (
        <div className='NavbarContainer'>
            <Logo />
            <Search />
            <CartLogo setShowCart={setShowCart} />
        </div>
    )
}

export { Navbar }