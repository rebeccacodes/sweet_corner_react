import './footer.scss';
import dots from '../../assets/images/dots-footer.png';
import phone from '../../assets/images/phone.png';
import React from 'react';

export default props => {
    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={dots} />
            </div>
            <div className="footer-center">
                Copyright &copy; {date} Sweet Corner. All rights reserved.
            </div>
            <div className="footer-right">
                <img className="phone" src={phone} />
                800 264 2099
            </div>
        </div>
    )
}