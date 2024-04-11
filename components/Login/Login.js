import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import Cookies from 'universal-cookie';
import { localhost } from '../../App';
import "../styles/Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRedirectButtonClicked, setIsRedirectButtonClicked] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const navigate = useNavigate();
    const cookie = new Cookies();

    async function loginFunction() {
        const userData = { username, password };
        
        const loginRequest = await fetch(`${localhost}/users/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const loginResponse = await loginRequest.json();
        
        setIsUserAuthenticated(true);

        cookie.set('accessToken', loginResponse.msg)
    }

    useEffect(() => {
        if(isRedirectButtonClicked === true) {
            navigate("/signup")
            return;
        }

        if(isUserAuthenticated === true) {
            navigate('/');
            return
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
                            type="password"
                            className='login-input'
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className='redirect-to-signup-class'>
                       <span className='signup-span'>Don't have an account? <button className='signup-button-redirection' onClick={() => setIsRedirectButtonClicked(true)}>Register here</button></span>
                    </div>

                    <button className='login-button' onClick={() => loginFunction()}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login