import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a
                href='https://facebook.com/tunglam.262'
                target='_blank'
                rel='noreferrer'
            >
                <BsFacebook />
            </a>
            <a
                href='https://github.com/Louis2602'
                target='_blank'
                rel='noreferrer'
            >
                <FaGithub />
            </a>
            <a
                href='https://linkedin.com/ttlam262'
                target='_blank'
                rel='noreferrer'
            >
                <BsLinkedin />
            </a>
        </div>
    );
};

export default HeaderSocials;
