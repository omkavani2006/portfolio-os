import React from 'react';

// You can keep the original images for now or replace them with your own IoT project images later
import iotSystem from '../../../assets/pictures/projects/art/gsts.png'; 

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Fire Alert System</h1>
            <h3>Hardware & IoT Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I enjoy developing web applications, working with hardware and Internet of Things (IoT) devices gives me hands-on experience with physical computing.
                </p>
                <br />
                <p>
                    My Fire Alert System is a safety-oriented IoT project designed to detect both fire and smoke in real-time, providing immediate visual alerts and remote SMS notifications.
                </p>
            </div>
            <div className="text-block">
                <h2>System Architecture & Components</h2>
                <br />
                <p>
                    This project was built from scratch utilizing an <b>Arduino Uno</b> as the core microcontroller. I integrated it with a sensitive fire and smoke sensor array to constantly monitor the environment for hazardous changes. 
                </p>
                <p>
                    To ensure the system works effectively even when no one is physically present, I implemented a <b>SIM module</b>. When the sensors detect smoke or a sudden temperature spike indicative of a fire, the Arduino processes this data and triggers the SIM module to send an emergency SMS alert to a pre-configured mobile number.
                </p>
                <br />
                <p>
                    For local visualization, I added an <b>LED screen</b> display. Under normal conditions, the screen shows a safe status, but in an emergency, it immediately flashes alert messages and critical sensor readings, ensuring anyone nearby is instantly warned.
                </p>
                <br />
                
                {/* 
                  IMPORTANT: You can replace 'iotSystem' with your own imported image variable
                  once you upload a photo of your Arduino setup to the assets folder.
                */}
                <div className="captioned-image">
                    <img src={iotSystem} alt="IoT Fire Alert System Setup" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> The Fire Alert System prototype utilizing Arduino Uno, SIM module, and LED Screen.
                        </sub>
                    </p>
                </div>
                
                <p>
                    Building this project challenged me to bridge the gap between software programming (C++ for Arduino) and hardware wiring. It required careful calibration of the smoke sensors to prevent false alarms and troubleshooting the cellular network connection for the SIM module.
                </p>
                <br />
                <h3>See the System in Action:</h3>
                <br />
                <ul>
                    <li>
                        {/* Replace this link with your actual project video link later */}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://drive.google.com/file/d/1WF8HNluaGvFX4W7oKlXnIDz9JFqvyRwp/view?usp=drivesdk" 
                        >
                            <p>
                                <b>VIDEO</b> - Fire Alert System Testing and Demonstration
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    Working on this IoT system taught me a lot about real-time data processing and hardware integration. I plan to continue exploring IoT technologies, potentially expanding this system with Wi-Fi modules and a dedicated web dashboard in the future.
                </p>
            </div>
        </div>
    );
};

export default ArtProjects;