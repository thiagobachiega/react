import { Link } from 'react-router-dom'
import style from './Header.module.css'
import logo from '../img/information.png'

function Header() {
    return(
        <div className={style.navbar}>
            <img src={logo}></img>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/noticias'>Noticias</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header