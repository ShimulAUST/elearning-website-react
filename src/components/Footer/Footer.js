import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer-copyright text-center py-3 footer-fixed">

                &copy; {new Date().getFullYear()} Copyright: <a href="https://shimulpaul.com"> ShimulPaul </a>

            </div>
        </div>
    );
};

export default Footer;