import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_d3g874d',
                'template_o74lwcf',
                form.current,
                'user_6B9UDllDyMg1nCGZ7Yckv'
            )
            .then((res) => {
                console.log('success', res.status);
            })
            .then((success) => {
                alert('Email sent successfully');
            })
            .catch((error) => {
                alert('Failed to send email');
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5 className='text-light'>ttlam.dev@gmail.com</h5>
                        <a
                            href='mailto:ttlam.dev@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Email me
                        </a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5 className='text-light'>Tran Tung Lam</h5>
                        <a
                            href='https://m.me/tunglam.262'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Send me a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlinePhone className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5 className='text-light'>+84 8689 382 03</h5>
                        <a
                            href='tel:0868938203'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Call me
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Full Name'
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Your Email'
                        required
                    />
                    <textarea
                        name='message'
                        rows='7'
                        placeholder='Your Message'
                        required
                    ></textarea>
                    <button type='submit' class='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
