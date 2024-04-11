import { useState, useEffect } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import UserImage from '../images/defaultUser.jpg';
import Cookies from 'universal-cookie';
import { localhost } from '../../App';
import "../styles/Profile.css";

/*
    @dev for the porpouses of the interview task 
    I will set an default image to the user which is downloaded
    from www.unsplash.com
*/

const Profile = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [userData, setUserData] = useState([]);

    const cookie = new Cookies();

    async function getUserData() {
        const getCookie = cookie.get('accessToken')
        
        const getUserDataRequest = await fetch(`${localhost}/users/user`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie}`
            }
        });

        const getUserDataResponse = await getUserDataRequest.json();

        setUserData(getUserDataResponse.msg);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className='profile-root-class'>
            <HeaderComponent />

            <div className='profile-class-wrapper'>
                <div className='profile-wrapper'>
                    <div className='user-image-class'>
                        <img src={UserImage} className='user-default-image' alt='User Default Image' />

                        <label htmlFor="files" className="edit-image-label">Edit Image</label>
                        <input
                            id="files"
                            className='edit-image-input'
                            style={{ visibility: "hidden" }}
                            type="file"
                            onChange={(event) => setUploadImage(event.target.files[0])}
                        />
                    </div>

                    <div className='render-user-data-class'>
                        {userData.map((item) => {
                            return <>
                                <span className='username-span'>Username: {item.username}</span>
                                <span className='surname-span'>Surname: {item.surname}</span>
                                <span className='email-span'>Email: {item.email}</span>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile