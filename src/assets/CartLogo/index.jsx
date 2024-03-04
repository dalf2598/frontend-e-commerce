import './CartLogo.css'

function CartLogo ({setShowCart}) {
    
    return (
        <div className='cartLogoContainer' onClick={() => {setShowCart(prev => !prev)}}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }