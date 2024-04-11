import { useState, useRef } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import "../styles/Home.css";

const Home = () => {
    const [listOfFavouriteItems, setListOfFavouriteItems] = useState([]);

    const addNewItemToTheList = useRef("");


    function addNewItemFunction() {
        if(addNewItemToTheList.current.length === 0) return;

        setListOfFavouriteItems([...listOfFavouriteItems, addNewItemToTheList.current]);
    }

    return (
        <div className='home-class'>
            <HeaderComponent />

            <div className='home-wrapper-class'>
                <div className='home-wrapper'>
                    <h1 className='page-title'>Favourite Items</h1>

                    <input
                        type='text'
                        placeholder='Gym'
                        className='add-new-item-input'
                        onChange={(event) => {
                            return addNewItemToTheList.current = event.target.value;
                        }}
                    />

                    <div className='list-of-favourite-class'>
                        <ul className='ul-items'>
                            {listOfFavouriteItems.map((item, index) => {
                                return <li className='li-items' key={index}>{item}</li>
                            })}
                        </ul>
                    </div>

                    <button className='add-new-items-button' onClick={() => addNewItemFunction()}>Add New Item</button>
                </div>
            </div>
        </div>
    )
}

export default Home