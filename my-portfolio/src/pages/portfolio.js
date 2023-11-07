
import React, { useState, useRef } from 'react';

function Portfolio() {
    const introRef = useRef(null);

    const scrollToMenu = () => {
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: 'smooth' });
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
                    background-color: #fefefe;
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
                    background-color: white;
                }

                .menuList a{
                    color: black;
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
                }
                a {
                    text-decoration: none;
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
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                            </svg>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5-2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="">
                            <svg
                                xmlns="http://w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="">
                            <svg
                                xmlns="http://w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668z" clipRule="evenodd" />
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
                      
                        <button className="centered-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                            <span className='spanSocial'>LinkedIn</span>
                        </button>
                        <button className="centered-button midb">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            <span className='spanSocial'>Github</span>
                        </button>
                        <button className="centered-button midb">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                            <span className='spanSocial'>Mail</span>
                        </button>
                        <a href='RESUME_.pdf' download className='hreflink'>
                        <button className="centered-button midb">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg>
                            <span className='spanSocial'>Resume</span>
                        </button>
                        </a>
                        
                    </div>
                </div>
                <div className="content">
                    <h1>Your Content Goes Here</h1>
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
