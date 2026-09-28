import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            
            {/* Highflextech Internship */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Highflextech</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Developer Intern</h3>
                        <b>
                            <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://highflextech.com'}
                        >
                            <h4>www.highflextech.com</h4>
                        </a>
                            <p>Current</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Currently working as a Web Developer Intern, applying academic knowledge to real-world industry projects and collaborating with a professional development team.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developing and maintaining responsive web applications to improve user experience and interface functionality.
                        </p>
                    </li>
                    <li>
                        <p>
                            Refining development workflows and writing clean, maintainable code using modern web technologies like HTML, CSS, and JavaScript frameworks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborating closely in a professional environment to troubleshoot issues, optimize web performance, and prepare for impactful full-time opportunities.
                        </p>
                    </li>
                </ul>
            </div>

            {/* HIRAK - Jewels of Lab Grown Diamond */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>HIRAK - Jewels of Lab Grown Diamond</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.instagram.com/hirak.bardoli?igsh=NG5pZGx4cmMxMXhl'}
                        >
                            <h4>@hirak.bardoli</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Digital Marketing & Web Optimization</h3>
                        <b>
                            <p>March 2025 - August 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Spearheaded digital marketing and web optimization strategies to expand the online reach and sales for this lab-grown diamond jewelry brand based in Bardoli.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Executed a robust digital marketing strategy leveraging Instagram and WhatsApp to increase customer engagement and drive online sales for lab-grown diamonds.
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized the brand's website structure and content to improve visibility, user navigation, and overall digital footprint.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Diamond Goldy */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Diamond Goldy</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.instagram.com/diamondgoldy.bardoli/'}
                        >
                            <h4>@diamondgoldy.bardoli</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Digital Outreach Strategy</h3>
                        <b>
                            <p>January 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Initiated the foundational digital outreach and online marketing setup for this traditional jewelry storefront.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Set up structured digital channels including Instagram and WhatsApp to showcase traditional jewelry collections.
                        </p>
                    </li>
                    <li>
                        <p>
                            Modernized the initial sales pipeline by automating customer interactions and broadening audience reach.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
        marginTop: 32,
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;