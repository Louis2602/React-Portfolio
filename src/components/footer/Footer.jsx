import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsYoutube } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href='/#' className='footer__logo'>
                Lam Tran
            </a>
            <ul className='permalinks'>
                <li>
                    <a href='/#'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/tunglam.262'>
                    <FaFacebookF />
                </a>
                <a href='https://www.instagram.com/_ttlam_'>
                    <FiInstagram />
                </a>
                <a href='https://www.youtube.com/c/LouisTran262'>
                    <BsYoutube />
                </a>
                <a href='https://www/github.com/Louis262'>
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/ttlam262/'>
                    <BsLinkedin />
                </a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Lam Tran. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
