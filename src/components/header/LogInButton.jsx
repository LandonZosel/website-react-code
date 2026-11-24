import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

import './Header.css'

const LogInButton = () => {
    const googleLogInPopup = () => {
        signInWithPopup(auth, provider)
        .then(() => {

        }).catch((error) => {
            // Handle Errors
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode + ": " + errorMessage)
        });
    };

    return (
        <nav>
            <ul>
                <li><button className="navButton" onClick={googleLogInPopup}>Log In</button></li>
            </ul>
        </nav>
    )
}

export default LogInButton
