import { useState, useEffect } from "react";
import { useNavigate } from "react-router-native";
import Cookies from "universal-cookie";
import "../styles/Header.css";

const HeaderComponent = () => {      
    const [isHomeButtonClicked, setIsHomeButtonClicked] = useState(false);
    const [isProfileButtonClicked, setIsProfileButtonClicked] = useState(false);
    const [isLogOutButtonClicked, setIsLogOutButtonClicked] = useState(false);

    const navigate = useNavigate();
    const cookie = new Cookies();

    useEffect(() => {
        if(isHomeButtonClicked == true) {
            navigate('/');
            return;
        }

        if(isProfileButtonClicked === true) {
            navigate('/profile');
            return;
        }

        if(isLogOutButtonClicked === true) {
            navigate('/signin');
            cookie.remove('accessToken')
            return;
        }

    }, [isHomeButtonClicked, isProfileButtonClicked, isLogOutButtonClicked]);
    
    return (
        <header className='home-root-class'>
            <div className='website-title-class'>
                <h1 className='website-title'>Favourite List</h1>
            </div>

            <div className='redirection-links-class'>
                 <button className='redirect-button' onClick={() => setIsHomeButtonClicked(true)}>Home</button>
                 <button className='redirect-button' onClick={() => setIsProfileButtonClicked(true)}>Profile</button>
                 <button className="redirect-button" onClick={() => setIsLogOutButtonClicked(true)}>Log Out</button>
            </div>
        </header>
    )
}

export default HeaderComponent