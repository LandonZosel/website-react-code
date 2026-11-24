import NavButton from './NavButton'
import './Header.css'

const MainNavBar = () => {
    return (
        <nav id="navBar">
            <ul>
                <NavButton route="/10/" text="Home"/>
                <NavButton route="/10/instruments" text="Instruments"/>
                <NavButton route="/10/music-theory" text="Music Theory"/>
                <NavButton route="/10/contact-us" text="Contact Us"/>
            </ul>
        </nav>
    )
}

export default MainNavBar
