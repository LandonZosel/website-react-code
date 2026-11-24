import { Link } from 'react-router'
import './Header.css'

const NavButton = ({route, text}) => {
    return (
        <li><Link className="navButton" to={route}>{text}</Link></li>
    )
}

export default NavButton
