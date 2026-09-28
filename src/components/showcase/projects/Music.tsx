import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Big Mart</h1>
            <h3>E-Commerce Web Application</h3>
            <br />
            <div className="text-block">
                <p>
                    Big Mart is a comprehensive e-commerce platform that I developed to strengthen my skills in front-end design and backend database integration.
                </p>
                <br />
                <p>
                    The main objective of this project was to create a responsive, user-friendly online shopping experience with real-time data handling.
                </p>
            </div>
            
            <h2>Tech Stack & Features</h2>
            <br />
            <div className="text-block">
                <p>
                    The front-end of this project was built entirely using <b>HTML</b> and <b>CSS</b>. I focused heavily on creating a clean, responsive user interface that works seamlessly across both desktop and mobile devices without relying on heavy frontend frameworks.
                </p>
                <br />
                <p>
                    For the backend and data management, I integrated <b>Firebase</b>. This allowed me to implement robust features that are essential for any modern e-commerce site.
                </p>
                <br />
                <ul>
                    <li>
                        <p><b>Real-time Database:</b> Managed dynamic product catalogs and user data securely.</p>
                    </li>
                    <li>
                        <p><b>User Authentication:</b> Secure login and registration functionality using Firebase Auth.</p>
                    </li>
                    <li>
                        <p><b>Responsive UI:</b> Carefully structured CSS to ensure the layout adapts to different screen sizes smoothly.</p>
                    </li>
                </ul>
            </div>
            <br />
            
            <h2>Live Demo</h2>
            <br />
            <div className="text-block">
                <p>
                    You can check out the live deployment of the Big Mart E-Commerce platform hosted on GitHub Pages by clicking the link below:
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://omkavani2006.github.io/big-mart-ecommerce/"
                        >
                            <p>
                                <b>WEBSITE</b> - Visit Big Mart E-Commerce Live
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <br />
            <p>
                Building Big Mart gave me practical experience in connecting a custom front-end UI with a cloud-based NoSQL database, bridging the gap between design and functional backend logic.
            </p>
        </div>
    );
};

export default MusicProjects;