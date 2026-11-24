import { Link } from 'react-router'

import './Header.css'

const AccountButton = () => {
    return (
        <nav>
            <ul>
                <li><Link className="navButton" to="/10/account">Account</Link></li>
            </ul>
        </nav>
    )
}

export default AccountButton
