
import React, { useState, useRef } from 'react';

function Portfolio() {
    const introRef = useRef(null);
    const timelineRef = useRef(null);

    const scrollToMenu = () => {
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollTotimeline = () => {
        if(timelineRef.current) {
            timelineRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };




    return (
        <div className=''>
            <style>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    font-family: 'Poppins', sans-serif;
                }

                body {
                    background-color: black;
                    margin: 0; /* Reset margin to 0 */
                    padding: 0; /* Reset padding to 0 */
                    background-image: radial-gradient(#2e2f31 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                nav {
                    position: fixed;
                    height: 350px;
                    left: 20px;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    background-color: #2d2e32;
                    padding: 10px 10px;
                    border-radius: 30px;
                }

                nav ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-flow: column;
                    height: 100%;
                }

                nav ul li {
                    width: 100%;
                }

                nav ul li a {
                    text-decoration: none;
                    color: black;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    width: 100%;
                    transition: 0.2s all ease;
                }

                nav ul li a svg {
                    width: 30px;
                    height: 30px;
                }

                nav ul li a svg path {
                    transition: 0.2s all ease;
                }

                nav ul li a span {
                    position: absolute;
                    background-color: white;
                    padding: 2px 15px;
                    border-radius: 30px;
                    margin-left: 10px;
                    font-weight: 500;
                    font-size: 15px;
                    visibility: hidden;
                    opacity: 0;
                    transition: 0.2s all ease;
                }

                nav ul li a.active,
                nav ul li a:hover {
                    color: black;
                }

                nav ul li a.active span,
                nav ul li a:hover span {
                    opacity: 1;
                    visibility: visible;
                    margin-left: 50px;
                }

                nav.active ul li a span {
                    position: relative;
                    opacity: 1;
                    visibility: visible;
                    margin-left: 0;
                }

                nav.active ul li a:hover span {
                    margin-left: 0;
                }

                .list {
                    border-radius: 50%; /* Make it circular */
                    width: 40px; /* Set a fixed width to make it a circle */
                    height: 40px; /* Set a fixed height to make it a circle */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #2d2e32;
                    transition: 0.2s all ease;
                }
                
                .list a {
                    text-decoration: none;
                    color: white;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    width: 80%;
                    height: 80%;
                    transition: 0.2s all ease;
                }
                
                .list:hover {
                    background-color: white;
                }

                .menuList{
                }

                .menuList a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .timeline a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .projectList a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .certificate a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .technology a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .useslist a{
                    margin-left: 6px;
                    margin-top: 6px;
                }

                .content {
                    padding-top: 400px; /* Add some padding to create space for the navigation bar */
                    color: white;
                    text-align: left;
                  }

                  .intro {
                    padding-top: 150px; /* Add some padding to create space for the navigation bar */
                    color: white;
                    text-align: left ;
                    width: 600px;

                  }
                  .hey{
                    font-size: 55px;
                  }
                  .name{
                    background-color: #f3ec78;
                    background-image: linear-gradient(45deg, #f3ec78, #af4261);
                    background-size: 100%;
                    -webkit-background-clip: text;
                    -moz-background-clip: text;
                    -webkit-text-fill-color: transparent; 
                    -moz-text-fill-color: transparent;
                  }
                  .fullstack{
                    font-size: 55px;
                    background-color: #f3ec78;
                    background-image: linear-gradient(45deg, #f3ec78, #af4261);
                    background-size: 100%;
                    -webkit-background-clip: text;
                    -moz-background-clip: text;
                    -webkit-text-fill-color: transparent; 
                    -moz-text-fill-color: transparent;
                  }
                  .allContent{
                    margin-left: 35%;
                  }
                  .dot{
                    color: #71ce9a ;
                    font-size: 10px;
                    padding-right: 15px;
                    padding-bottom: 2px;
                    background-color: black;
                  }
                  .online{
                    padding-top: 8px;
                    padding-bottom: 40px;
                  }
                  .centered-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 11px 20px; /* Adjust padding as needed */
                    background-color: #2e2f31; /* Button background color */
                    color: #fff; /* Button text color */
                    border: none;
                    border-radius: 40px; /* Rounded corners */
                    cursor: pointer;
                    font-size: 17px;
                    transition: background-color 0.3s ease-in-out;
                    margin-top: 40px;
                     /* Adjust this margin as needed */

                    
                    /* Optional hover effect */
                    &:hover {
                      background-color: grey; /* Change background color on hover */
                    }
                  }
                .midb{
                    margin-left: 30px;
                }

                  .socials {
                    display: flex; /* Display children in a row */
                    justify-content:  flex-start; /* Space buttons evenly along the row */
                    align-items: center; /* Align items vertically in the center */
                }
                .spanSocial{
                    margin-left: 10px;
                    padding-top: 2px;
                    color: white;
                }
                a {
                    text-decoration: none;
                  }
                .descriptionParagraph{
                    padding-top: 40px;
                    font-size: 18px;
                    color: white;
                    line-height: 30px;
                }
                .hline{
                    margin-top: 40px;
                    border: None;
                    width: 600px; 
                    background-color: grey;
                    height: 1px; 
                    float: left;
                    
                }                   

                `}
            </style>
            <div className='background'>
                <nav id="menuBar" className="navClass">
                    <ul>
                        <li className='list menuList' >
                            <a href="#" onClick={scrollToMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                            </a>
                        </li>
                        <li className='list timeline'>
                            <a href="#" onClick={scrollTotimeline}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"/>
                                    {/* <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" /> */}
                                </svg>
                            </a>
                        </li>
                        <li className='list projectList'>
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                                </svg>
                            </a>
                        </li>
                        <li className='list certificate'>
                            <a href="">
                                <svg
                                    xmlns="http://w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                </svg>
                            </a>
                        </li>
                        <li className='list technology'>
                            <a href="">
                                <svg
                                    xmlns="http://w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                                </svg>
                            </a>
                        </li>
                        <li className='list useslist'>
                            <a href="">
                                <svg
                                    xmlns="http://w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
                                    <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='allContent'>
                    <div className="intro" ref={introRef}>
                        <p className='online'>
                            <h3><span className='dot'>⬤</span><span className='spanOnline'>Online.</span></h3>
                        </p>
                        <h1 className='hey'>Hey, I'm <span className='name'>Ahnaf</span></h1>
                        <h1 className='fullstack'>Fullstack Developer</h1>

                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/ahnaf-habib-khan-50951b174/' target="_blank" className='hreflink'>
                                <button className="centered-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    <span className='spanSocial'>LinkedIn</span>
                                </button>
                            </a>
                            <a href='https://github.com/ahnafhabibkhan' target="_blank" className='hreflink'>
                                <button className="centered-button midb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    <span className='spanSocial'>Github</span>
                                </button>
                            </a>
                            <a href='mailto: ahnafhkhan@yahoo.com' target="_blank" className='hreflink'>
                                <button className="centered-button midb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                    <span className='spanSocial'>Mail</span>
                                </button>
                            </a>
                            <a href='RESUME_.pdf' download className='hreflink'>
                                <button className="centered-button midb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                    </svg>
                                    <span className='spanSocial'>Resume</span>
                                </button>
                            </a>
                        </div>
                        <div className='description'>
                            <p className='descriptionParagraph'>
                                Ahnaf is an experienced software developer with over 1 year of expertise in Python, React, and Java Springboot. He's a proficient user of AWS services, such as Lambda and S3 buckets, and is well-equipped to deliver efficient and robust software solutions.
                            </p>
                        </div>
                        <hr className='hline' />
                    </div>
                    <div className="content timelineclass" ref={timelineRef}>
                        <h1>My Timeline</h1>
                        <p>This is the content that will appear in the middle of the webpage.</p>
                    </div>
                    <div className="content" >
                        <h1>Your Content Goes Here</h1>
                        <p>This is the content that will appear in the middle of the webpage.</p>
                    </div>
                    <div className="content">
                        <h1>Your Content Goes Here</h1>
                        <p>This is the content that will appear in the middle of the webpage.</p>
                    </div>
                    <div className="content">
                        <h1>Your Content Goes Here</h1>
                        <p>This is the content that will appear in the middle of the webpage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
