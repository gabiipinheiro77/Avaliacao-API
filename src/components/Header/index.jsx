import { Link } from 'react-router-dom'
import './style.css'


function Header () {
    return (
        <>
    <header>
        <h1>AVALIAÇÂO API</h1>
        <Link to='/about'>
        <button>Calculadora</button>
        </Link>
        <Link to='/Cris'>
        <button>CR7</button>
        </Link>
        <Link to='/'>
        <button>Home</button>
        </Link>
    </header>
        </>
    )
}
export default Header