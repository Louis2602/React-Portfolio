import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Title 1',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Title 2',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Title 3',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Title 4',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Title 5',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Title 6',
        github: 'https://github.com/Louis2602',
        demo: 'https://dribbble.com/shots/18664612-Viduza-Mobile',
    },
];
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {/* <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>This is a portfolio item tittle</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Louis2602/' className='btn'>
                            Github
                        </a>
                        <a
                            href='https://dribbble.com/Alien_pixels'
                            className='btn btn-primary'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Live Demo
                        </a>
                    </div>
                </article> */}
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn'>
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
