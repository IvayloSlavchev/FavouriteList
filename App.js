import { View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';

export const localhost = 'http://localhost:3001'

export default function App() {
    return (
        <NativeRouter>
            <View>
                <Routes>
                    <Route path="/" element={<ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>} />
                    <Route path='/profile' element={<ProtectedRoutes>
                        <Profile />
                    </ProtectedRoutes>} />

                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                </Routes>
            </View>
        </NativeRouter>
    );
}