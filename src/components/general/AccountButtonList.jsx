import { useNavigate } from 'react-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

import './AccountButtonList.css'

const AccountButtonList = () => {
    const navigate = useNavigate();

    const googleLogOut = async () => {
        await signOut(auth).then(() => {
            //redirect to home page
            navigate('/10/', { replace: true });
        }).catch((error) => {
            // Handle Errors
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode + ": " + errorMessage)
        });
    }

    return (
        <div className="accountButtonList">
            <a className="accountButton" href="https://myaccount.google.com" target="_blank">Google Change Password</a>
            <div>
                <p>This account uses Google Sign-In.</p>
                <p>You can manage your password and security settings directly through your Google Account.</p>
            </div>
            <br/>
            <button className="accountButton" onClick={googleLogOut}>Log Out</button>
        </div>
    )
}

export default AccountButtonList
