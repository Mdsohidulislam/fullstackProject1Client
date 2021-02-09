import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import BusinessCard from '../BusinessCard/BusinessCard';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    const [logedIn,setLogged]=useContext(UserContext)
    console.log(logedIn)
    return (
        <div className='header'>
            <NavBar/>
            <HeaderMain/>
            <BusinessCard/>
        </div>
    );
};

export default Header;