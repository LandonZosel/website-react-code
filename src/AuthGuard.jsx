import { useNavigate } from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const AuthGuard = ({ page }) => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, do nothing
            return;
        } else {
            // User is signed out, redirect
            navigate('/10/', { replace: true });
        }
    });

    return page
}

export default AuthGuard