import './header.scss';
import headerImg from '../../assets/images/header.png';
import logo from '../../assets/images/logo.png';

import React from 'react';
import Nav from '../nav';

export default props => {
    return (
        <div className="header">
            <img src={headerImg} />
            <Nav />
            <img className="logo" src={logo} />
            <p className=" tagline center">We deliver cupcakes for the important events in your life!</p>
            <div className="line"></div>
        </div>
    )
}