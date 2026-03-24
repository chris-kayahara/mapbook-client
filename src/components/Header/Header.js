import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import cameraIcon from '../../assets/icons/photo_camera.svg'
import locationIcon from '../../assets/icons/location.svg'
import logoIcon from '../../assets/icons/logo.svg'

import './Header.scss'

export default function Header({ isUserLoggedIn, setIsUserLoggedIn }) {

    const navigate = useNavigate();

    const logOut = () => {
        if (!sessionStorage.getItem("token")){
            return
        }
        sessionStorage.removeItem("token");
        setIsUserLoggedIn(false);
        navigate("/");
    };

        return (
            <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <img className="header__logo-icon" src={logoIcon} alt="camera icon"/>
                    <Link className="header__logo" to="/">MapBook</Link>
                </div>
                { isUserLoggedIn === true ? 
                                <div className="header__logout" onClick={logOut}>
                                Sign Out
                            </div> : <></>}

            </div>
        </header>
        )
}