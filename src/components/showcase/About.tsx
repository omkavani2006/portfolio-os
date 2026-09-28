import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpeg';
import meNow from '../../assets/pictures/currentme.jpeg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Om kavani</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a final-year B.Tech student in Computer Science and Technology at Uka Tarsadia University!
                    I love building practical web applications, and I recently developed 'Big Mart', 
                    an e-commerce website built with HTML, CSS, and integrated with a Firebase backend.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:omkavani2006@gmail.com">
                        omkavani2006@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey into technology started back in 10th grade when I attended a free 
                    coding demo class. That single session sparked a deep interest in programming,
                    which quickly expanded into hardware as I spent hours watching PC building tutorials
                    on YouTube. Following this passion, I completed my 11th and 12th grade in the Science 
                    stream (PCM) at AB School in Navsari. This strong technical foundation naturally led 
                    me to pursue my B.Tech at Maliba College (Uka Tarsadia University),
                    where I have been honing my development skills ever since.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            A real photo of me developing this
                            website in 90s" :)
                        </sub>
                    </p>
                </div>

               <p>
                 I started taking web development more seriously when I decided to build real-world applications from scratch. 
                 This drive led me to develop my first major project, an e-commerce website named Big Mart. 
                 I designed and built the entire user interface using HTML and CSS, and successfully integrated it with a Firebase backend. 
                 You can check out the live project here:{' '}
                   <a
                    rel="noreferrer"
                    target="_blank"
                      href="https://omkavani2006.github.io/big-mart-ecommerce/"
                   >
                    Big Mart E-Commerce
                    </a>
                       .
               </p>
                <br />
                <p>
                   <p>
                    Now in my final year of B.Tech, I am actively applying my skills in the industry as a Web Developer Intern at Highflextech. 
                    This role allows me to work on real-world projects, refine my development workflow, and collaborate in a professional environment. 
                    As I approach graduation, I am eager to take on new challenges and am actively looking for exciting full-time opportunities 
                    where I can continue to grow and build impactful web applications.
                </p>
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
<br />
<p>
    Beyond the screen, I am a very active person and love focusing on my fitness. 
    My main hobbies include running and swimming. If you are also into fitness, 
    you can check out my activities on my{' '}
    <a
        rel="noreferrer"
        target="_blank"
        href="https://strava.app.link/771KemY3J6b"
    >
        Strava profile
    </a>. 
    When I am not working out or coding, I am a huge Formula 1 fan. 
    I love following the weekend races and the intense battles between 
    Red Bull, Ferrari, and Mercedes!
</p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                Me, AUGUST 2026 
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
        <p>
    Thanks for reading about me! I hope that you enjoy exploring
    the rest of my portfolio website and everything it has to
    offer. If you want to connect, talk about web development, or discuss job opportunities, feel free to reach out to me on LinkedIn{' '}
    <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/om-kavani-34b555429"
    >
        Om Kavani
    </a>!
</p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:omkavani2006@gmail.com">
                        omkavani2006@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
