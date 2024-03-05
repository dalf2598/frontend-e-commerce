import './Total.css'

function Total ({value}) {
    return (
        <div className='TotalContainer'>
            <h2>Subtotal</h2>
            <h3>${value}</h3>
            <button>Continue</button>
        </div>
    )
}

export { Total }