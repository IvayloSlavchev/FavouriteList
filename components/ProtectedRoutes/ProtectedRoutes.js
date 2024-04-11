import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-native';

const ProtectedRoutes = ({ children }) => {
    const cookie = new Cookies();
    const getUserAccessToken = cookie.get("accessToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (getUserAccessToken === undefined || getUserAccessToken === null) {
           navigate("/signin");
            return;
        }
    }, [getUserAccessToken, navigate]);

    return children;
}

export default ProtectedRoutes