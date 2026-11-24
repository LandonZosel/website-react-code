import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import MainNavBar from './MainNavBar'
import AccountButton from './AccountButton'
import LogInButton from './LogInButton'
import './Header.css'

const Header = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    //only show the main nav bar and account button if user is logged in, otherwise show log in button
    return (
        <header>
            <p className="headerTitle">The Orchestra</p>
            {user ? <MainNavBar/> : null}
            {user ? <AccountButton/> : <LogInButton/>}
        </header>
    )
}

export default Header
