import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import { localhost } from '../../App';
import "../styles/Login.css"

const SignUp = () => {
    const [isRedirectButtonClicked, setIsRedirectButtonClicked] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const navigate = useNavigate();

    async function registerUser() {
        const userData = { username, email, password };

        await fetch(`${localhost}/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        setIsUserAuthenticated(true);
    }

    useEffect(() => {
        if(isRedirectButtonClicked === true) {
            navigate('/signin');
            return;
        }

        if(isUserAuthenticated === true) {
            navigate('/signin');
            return;
        }
    }, [isRedirectButtonClicked, isUserAuthenticated]);

    return (
        <div className='login-root-class'>
            <div className='login-wrapper-class'>
                <div className='login-wrapper'>
                    <h1 className='sign-in-title'>Sign In</h1>

                    <div className='login-input-class'>
                        <input
                            type="text"
                            className='login-input'
                            placeholder='Username'
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <input
                            type="email"
                            className='login-input'
                            placeholder='Email'
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <input
                            type="password"
                            className='login-input'
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className='redirect-to-signup-class'>
                       <span className='signup-span'>Don't have an account? <button className='signup-button-redirection' onClick={() => setIsRedirectButtonClicked(true)}>Register here</button></span>
                    </div>

                    <button className='login-button' onClick={() => registerUser()}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp