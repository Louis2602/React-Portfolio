import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpeg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Simple Weather App',
        github: 'https://github.com/Louis2602/simple-weather-app',
        demo: 'http://climate-app.surge.sh/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Memories Mern Project',
        github: 'https://github.com/Louis2602/Memories-Mern-Project',
        demo: '/#',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Lofi WebApp',
        github: 'https://github.com/Louis2602/Lofi-website',
        demo: '/#',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Simple Calculator App',
        github: 'https://github.com/Louis2602/Simple-Calculator-App',
        demo: '/#',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Machine Learning - Training CIFAR 10 Dataset',
        github: 'https://github.com/Louis2602/AI-Road-Map',
        demo: 'https://www.kaggle.com/code/trantunglam/gdsc-ai/edit',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Data Science',
        github: 'https://github.com/Louis2602/Data-Science',
        demo: '/#',
    },
];
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn' target='_blank' rel='noreferrer'>
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className='btn btn-primary'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
