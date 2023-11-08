
import React, { useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Portfolio() {
    const introRef = useRef(null);
    const timelineRef = useRef(null);
    const projectRef = useRef(null);

    const scrollToMenu = () => {
        if (introRef.current) {
            const offsetTop = introRef.current.getBoundingClientRect().top;
            const start = window.scrollY;
            const target = offsetTop + start;
            const duration = 1000; // You can adjust the duration as needed (in milliseconds)
            let startTime = null;
    
            const animateScroll = (currentTime) => {
                if (!startTime) {
                    startTime = currentTime;
                }
    
                const progress = (currentTime - startTime) / duration;
                if (progress < 1) {
                    window.scrollTo(0, start + progress * (target - start));
                    requestAnimationFrame(animateScroll);
                } else {
                    window.scrollTo(0, target);
                }
            };
    
            requestAnimationFrame(animateScroll);
        }
    };

    const scrollTotimeline = () => {
        if (timelineRef.current) {
            const offsetTop = timelineRef.current.getBoundingClientRect().top;
            const start = window.scrollY;
            const target = offsetTop + start;
            const duration = 1000; // You can adjust the duration as needed (in milliseconds)
            let startTime = null;
    
            const animateScroll = (currentTime) => {
                if (!startTime) {
                    startTime = currentTime;
                }
    
                const progress = (currentTime - startTime) / duration;
                if (progress < 1) {
                    window.scrollTo(0, start + progress * (target - start));
                    requestAnimationFrame(animateScroll);
                } else {
                    window.scrollTo(0, target);
                }
            };
    
            requestAnimationFrame(animateScroll);
        }
    };

    const scrollToProjects = () => {
        if (projectRef.current) {
            const offsetTop = projectRef.current.getBoundingClientRect().top;
            const start = window.scrollY;
            const target = offsetTop + start;
            const duration = 1000; // You can adjust the duration as needed (in milliseconds)
            let startTime = null;
    
            const animateScroll = (currentTime) => {
                if (!startTime) {
                    startTime = currentTime;
                }
    
                const progress = (currentTime - startTime) / duration;
                if (progress < 1) {
                    window.scrollTo(0, start + progress * (target - start));
                    requestAnimationFrame(animateScroll);
                } else {
                    window.scrollTo(0, target);
                }
            };
    
            requestAnimationFrame(animateScroll);
        }
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'white' : '#2e2f31 ',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        paddingLeft: '20px',
        paddingTop: '20px',
        height: '200px',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className=''>
            <style>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    font-family: 'Verdana', sans-serif;
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
                    background-color: white;
                }

                .menuList a{
                    margin-left: 6px;
                    margin-top: 6px;
                    color: black
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
                    padding-top: 100px; /* Add some padding to create space for the navigation bar */
                    color: white;
                    text-align: left;
                  }

                  .intro {
                    padding-top: 150px; /* Add some padding to create space for the navigation bar */
                    color: white;
                    text-align: left ;
                    width: 650px;

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
                    width: 650px; 
                    background-color: grey;
                    height: 1px; 
                    float: left;
                    
                }
                .custom-vertical-timeline {
                    max-width: 650px; /* Adjust the value as needed */
                    margin-right: 650px;
                  } 

                .timelineHeader{
                    padding-bottom: 40px;
                }
                .vertical-timeline::before{
                    height: 90%
                }
                .projects{
                    color: #7d7e82;
                    font-weight:500;
                    line-height: 25px;
                    width: 250px;
                    font-family: Verdana;
                }
                .projectsHeader{
                    color: white;
                    font-weight:700;
                }
                .boxForProjects{
                    padding-top: 30px;
                }
                .projectsContent{
                    cursor: pointer;
                }
                .itemHover:hover {
                    background-color: #2e2f31;
                    opacity: 0.8; /* Adjust the opacity value as needed */
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
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
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
                                    <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z" />
                                    {/* <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" /> */}
                                </svg>
                            </a>
                        </li>
                        <li className='list projectList'>
                            <a href="#" onClick={scrollToProjects}>
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
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
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
                                    <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                                    <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
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
                        <h1 className='timelineHeader'>My Timeline</h1>
                        <VerticalTimeline className="custom-vertical-timeline">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work icon-hover"
                                contentStyle={{
                                    background: 'transparent',
                                    color: '#fff',
                                    boxShadow: '0 0px 0 #ddd',
                                    marginTop: '-80px',
                                    textAlign: 'right',
                                    fontFamily: 'Verdana',

                                }}
                                contentArrowStyle={{ borderRight: '7px solid  transparent' }}
                                iconStyle={{
                                    background: '#fff',
                                    color: '#fff',
                                    width: '5px',
                                    height: '5px',
                                    marginLeft: '-3px',
                                    marginTop: '50px',
                                }}
                            >
                                <p className="vertical-timeline-element-subtitle">2021-09-01</p>
                                <p>
                                    First Software Developer Internship as SDET @Haivision
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: 'transparent', color: '#fff',
                                    boxShadow: '0 0px 0 #ddd',
                                    marginTop: '-100px',
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  transparent' }}
                                iconStyle={{
                                    background: '#fff',
                                    color: '#fff',
                                    width: '5px',
                                    height: '5px',
                                    marginLeft: '-3px',
                                    marginTop: '-50px',

                                }}
                            // icon={<WorkIcon />}
                            >
                                <p className="vertical-timeline-element-subtitle">2022-05-01</p>
                                <p>
                                    Joined @UKG as a Software Developer Intern
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: 'transparent', color: '#fff',
                                    boxShadow: '0 0px 0 #ddd',
                                    textAlign: 'right',
                                    marginTop: '-80px',
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  transparent' }} iconStyle={{
                                    background: '#fff',
                                    color: '#fff',
                                    width: '5px',
                                    height: '5px',
                                    marginLeft: '-3px',
                                    marginTop: '50px',
                                }}
                            // icon={<WorkIcon />}
                            >
                                <p className="vertical-timeline-element-subtitle">2023-04-01</p>
                                <p>
                                    Graduated B.Eng from @Concordia University as a Software Developer
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: 'transparent', color: '#fff',
                                    boxShadow: '0 0px 0 #ddd',
                                    marginTop: '-100px',
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  transparent' }} iconStyle={{
                                    background: '#fff',
                                    color: '#fff',
                                    width: '5px',
                                    height: '5px',
                                    marginLeft: '-3px',
                                    marginTop: '-50px',
                                }}
                            // icon={<WorkIcon />}
                            >
                                <p className="vertical-timeline-element-subtitle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        style={{ height: '40px', width: '40px' }}
                                        fill="currentColor"
                                    >
                                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />

                                    </svg>
                                </p>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                        <hr className='hline' />
                    </div>
                    <div className="content projectsContent" ref={projectRef} >
                        <h1>Projects</h1>
                        <Box className='boxForProjects' sx={{ width: '650px' }}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                <Grid xs={6}>
                                    <a href='http://color-palette-generator-react.s3-website-us-east-1.amazonaws.com/' target="_blank" >
                                    <Item className='itemHover'>
                                        <h3 className='projectsHeader'>Color Palette Generator</h3>
                                        <p className='projects'>A React-based Color Palette Generator has been developed and hosted on an S3 bucket, providing an efficient tool for generating color palettes.</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="175.7 78 490.6 436.9"
                                                style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                fill="currentColor"
                                            >
                                                <g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 80 80"
                                                style={{ height: '28px', width: '30px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                fill="currentColor"
                                            >
                                                <linearGradient id="a" x1="0%" y1="100%" y2="0%"><stop offset="0" stop-color="#1b660f" /><stop offset="1" stop-color="#6cae3e" /></linearGradient><g fill="none" fill-rule="evenodd"><path d="M0 0h80v80H0z" fill="url(#a)" /><path d="M60.836 42.893l.384-2.704c3.54 2.12 3.587 2.997 3.586 3.02-.006.006-.61.51-3.97-.316zm-1.943-.54C52.773 40.5 44.25 36.59 40.8 34.96c0-.014.004-.027.004-.041a2.406 2.406 0 0 0-2.404-2.403c-1.324 0-2.402 1.078-2.402 2.403s1.078 2.403 2.402 2.403c.582 0 1.11-.217 1.527-.562 4.058 1.92 12.515 5.774 18.68 7.594L56.17 61.56a.955.955 0 0 0-.01.14c0 1.516-6.707 4.299-17.666 4.299-11.075 0-17.853-2.783-17.853-4.298 0-.046-.003-.091-.01-.136l-5.093-37.207c4.409 3.035 13.892 4.64 22.962 4.64 9.056 0 18.523-1.6 22.94-4.625zM15 20.478C15.072 19.162 22.634 14 38.5 14c15.864 0 23.427 5.16 23.5 6.478v.449C61.13 23.877 51.33 27 38.5 27c-12.852 0-22.657-3.132-23.5-6.087zm49 .022c0-3.465-9.934-8.5-25.5-8.5S13 17.035 13 20.5l.094.754 5.548 40.524C18.775 66.31 30.86 68 38.494 68c9.472 0 19.535-2.178 19.665-6.22l2.396-16.896c1.333.319 2.43.482 3.31.482 1.184 0 1.984-.29 2.469-.867a1.95 1.95 0 0 0 .436-1.66c-.26-1.383-1.902-2.875-5.248-4.784l2.376-16.762z" fill="#fff" /></g>
                                            </svg>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                                <Grid xs={6}>
                                <a href='https://github.com/ahnafhabibkhan/COVID-19-TRACKING-APP' target="_blank" >
                                    <Item className='itemHover'>
                                        <h3 className='projectsHeader'>Covid-19 Tracking App</h3>
                                        <p className='projects'>The Covid-19 Tracking App, created using Node.js and Vue.js, has been containerized with Docker for streamlined deployment and management.</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 2500 2165.1"
                                                style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                fill="currentColor"
                                            >
                                                <path d="m1538.7 0-288.7 500-288.7-500h-961.3l1250 2165.1 1250-2165.1z" fill="#4dba87" /><path d="m1538.7 0-288.7 500-288.7-500h-461.3l750 1299 750-1299z" fill="#435466" />
                                            </svg>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 256 282"
                                                style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                fill="currentColor"
                                            >
                                                <g fill="#8CC84B"><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" /><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" /></g>

                                            </svg>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                                <Grid xs={6}>
                                <a href='https://github.com/armirza96/COMP472-IMAGE-CLASSIFICATION' target="_blank" >
                                    <Item className='itemHover'>
                                        <h3 className='projectsHeader'>Mask Detection AI</h3>
                                        <p className='projects'>
                                            The Mask Detection AI, powered by Torch and Skorch Python libraries, efficiently identifies various mask types (surgical, N95) in images.
                                        </p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="5.54320845 9.305 78.91379155 26.39029625"
                                                style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                fill="currentColor"
                                            >
                                                <path d="m24.27 17.059-1.915 1.918c3.192 3.191 3.192 8.394 0 11.585-3.195 3.196-8.394 3.196-11.59 0-3.19-3.19-3.19-8.394 0-11.585l5.11-5.11.64-.73v-3.832l-7.757 7.754a10.854 10.854 0 0 0 0 15.421 10.854 10.854 0 0 0 15.422 0c4.379-4.289 4.379-11.222.09-15.421zm0 0" fill="#ee4c2c" /><path d="m21.898 15.05a1.461 1.461 0 0 1 -2.921 0 1.46 1.46 0 0 1 2.921 0zm0 0" fill="#ee4c2c" /><path d="m36.008 24.02h-1.5v3.859h-1.121v-10.953h2.738c2.902 0 4.273 1.41 4.273 3.453 0 2.406-1.703 3.61-4.398 3.648zm.074-6.055h-1.613v5.02l1.578-.044c2.074-.039 3.195-.87 3.195-2.57 0-1.535-1.078-2.406-3.152-2.406zm9.383 9.87-.664 1.743c-.746 1.95-1.5 2.531-2.614 2.531-.62 0-1.078-.164-1.578-.375l.332-.992c.375.207.79.332 1.246.332.622 0 1.079-.332 1.66-1.875l.54-1.41-3.11-7.926h1.16l2.532 6.64 2.488-6.64h1.121zm6.844-9.827v9.914h-1.121v-9.914h-3.856v-1.082h8.832v1.039h-3.854zm7.011 10.12c-2.242 0-3.902-1.66-3.902-4.233 0-2.57 1.703-4.274 3.977-4.274 2.238 0 3.859 1.66 3.859 4.234 0 2.57-1.703 4.274-3.941 4.274zm.04-7.5c-1.7 0-2.82 1.368-2.82 3.235 0 1.95 1.163 3.278 2.862 3.278 1.7 0 2.82-1.368 2.82-3.235 0-1.953-1.163-3.277-2.863-3.277zm6.68 7.294h-1.08v-8.05l1.08-.208v1.703c.538-1.039 1.327-1.703 2.366-1.703.492.004.977.133 1.41.375l-.293 1.035c-.328-.207-.785-.332-1.242-.332-.832 0-1.617.625-2.281 2.074v5.106zm8.046.207c-2.406 0-3.941-1.742-3.941-4.234 0-2.528 1.66-4.274 3.94-4.274.997 0 1.83.25 2.532.707l-.289.996a3.986 3.986 0 0 0 -2.242-.664c-1.742 0-2.82 1.285-2.82 3.195 0 1.95 1.164 3.235 2.863 3.235a4.19 4.19 0 0 0 2.242-.664l.207.996c-.707.457-1.578.703-2.492.703zm9.25-.207v-5.188c0-1.41-.578-2.023-1.7-2.023-.913 0-1.823.453-2.488 1.16v6.098h-1.082v-11.864l1.082-.207v5.059c.829-.828 1.907-1.285 2.778-1.285 1.578 0 2.531.996 2.531 2.738v5.516zm0 0" fill="#252525" />


                                            </svg>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 16 16"
                                                preserveAspectRatio="xMinYMin meet"
                                                style={{ height: '25px', width: '25px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                fill="currentColor"
                                            >

                                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
                                            </svg>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                                <Grid xs={6}>
                                <a href='https://github.com/ahnafhabibkhan/Email-Storage-Tkinter' target="_blank" >
                                    <Item className='itemHover'>
                                        <h3 className='projectsHeader'>Email Storage</h3>
                                        <p className='projects'>
                                            The "Email Storage" application, built with the tkinter library, offers a streamlined GUI for secure email handling and user registration.
                                        </p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 16 16"
                                                preserveAspectRatio="xMinYMin meet"
                                                style={{ height: '25px', width: '25px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                fill="currentColor"
                                            >

                                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
                                            </svg>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <hr className='hline' />
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
