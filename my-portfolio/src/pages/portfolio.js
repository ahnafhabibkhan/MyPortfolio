
import React, { useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AWSCPC from '../images/aws-certified-cloud-practitioner.png'


function Portfolio() {
    const introRef = useRef(null);
    const timelineRef = useRef(null);
    const projectRef = useRef(null);
    const certificateRef = useRef(null);


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

    const scrollToCertificate = () => {
        if (certificateRef.current) {
            const offsetTop = certificateRef.current.getBoundingClientRect().top;
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
                .imageCertificateAWSCPC{
                    height: 180px;
                    width: 180px;
                }
                h3,p{
                    font-family: Verdana;
                }
                .certificateHeader{
                    color: white;
                }
                .certificatePara{
                    color: white;
                }
                .certificateItem{
                    background-color: transparent;
                }
                .technologyItem{
                    height: 140px;
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
                            <a href="#" onClick={scrollToCertificate}>
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
                            <a href="#">
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
                            <a href="#">
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
                                                    viewBox="0 0 32 32"
                                                    style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                    fill="currentColor"
                                                >

                                                    <title>react</title>
                                                    <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>

                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 16 16"
                                                    style={{ height: '28px', width: '30px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                    fill="currentColor"
                                                >
                                                    <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <g fill="white"> <path d="M6.258 1.687L8.439.5l2.182 1.187.005 3.285-2.18.367-2.188-.37V1.687z" /> <path d="M3.307 3.083l2.41.69V5.43l1.656.28-1.647.185v4.25l1.653.195-1.653.31v1.695l-2.419.627v-.008l-.807-.37V3.469l.807-.37v-.016zM11.166 10.65v2.047l2.304.272 1.03-.594V3.688l-1.03-.594-2.306.272.003 2.068-1.645.277 1.644.184v4.25l-1.651.195 1.651.31z" /> <path d="M6.267 11.103l2.182-.409 2.177.41v3.22L8.446 15.5l-2.18-1.176v-3.22zM6.267 6.383l2.18-.244 2.179.244V9.66l-2.18.257-2.18-.257V6.383z" /> </g> </g>


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
                                                    viewBox="0 0 32 32"
                                                    style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                    fill="currentColor"
                                                >
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z" /> </g>

                                                </svg>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 512 512"
                                                    style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                    fill="currentColor"
                                                >

                                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f0aa3"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M115.889,151.885l-24.053-13.773 c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899 c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306 c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107 l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0 c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733 c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317 c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0 c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448 c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0 l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014 c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057 l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449 l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738 c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1 c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122 v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312 c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095 c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387 c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236 l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771 C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0 l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856 c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832 c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769 c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0 l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06 c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576 c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504 l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323z M299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202 c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231 c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717 c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294 c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333 c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408z M438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979 c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979 c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z"> </path> </g> </g>

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
                                                    viewBox="0 0 32 32"
                                                    style={{ height: '30px', width: '30px', color: 'white', paddingTop: '15px' }}
                                                    fill="currentColor"
                                                >
                                                    <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M16.005 0.052l-9.369 9.375c-2.491 2.464-3.891 5.819-3.891 9.319s1.4 6.853 3.891 9.317c2.457 2.484 5.817 3.885 9.317 3.885s6.853-1.401 9.312-3.885c5.297-5.188 5.297-13.563 0.115-18.636l-2.317 2.313c3.859 3.859 3.859 10.145 0 14.005-3.86 3.859-10.145 3.859-14.005 0-3.86-3.86-3.86-10.147 0-14.005l6.177-6.172 0.776-0.885zM20.749 5.235c-0.973 0-1.765 0.792-1.765 1.765s0.792 1.76 1.765 1.76c0.975 0 1.761-0.787 1.761-1.76s-0.787-1.765-1.761-1.765z" /> </g>

                                                </svg>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    preserveAspectRatio="xMinYMin meet"
                                                    style={{ height: '25px', width: '25px', color: 'white', paddingTop: '15px', paddingLeft: '15px' }}
                                                    fill="currentColor"
                                                >
                                                    <title>python [#127]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>

                                                    </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="white">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">

                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
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
                                                    viewBox="0 0 20 20"
                                                    preserveAspectRatio="xMinYMin meet"
                                                    style={{ height: '25px', width: '25px', color: 'white', paddingTop: '15px', paddingLeft: '15px', }}
                                                    fill="currentColor"
                                                >

                                                    <title>python [#127]</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>

                                                    </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="white">
                                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">

                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>

                                                </svg>
                                            </div>
                                        </Item>
                                    </a>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <hr className='hline' />
                    <div className="content certificateContent" ref={certificateRef}>
                        <h1>Certificates</h1>
                        <Box className='boxForProjects' sx={{ width: '650px' }}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                <Grid xs={12}>
                                    <a href='#' >
                                        <Item className='certificateItem' sx={{ display: 'flex', alignItems: 'center' }}>
                                            <div>
                                                <img src={AWSCPC} className='imageCertificateAWSCPC' alt="AWS Cloud Practioner Certificate" />
                                            </div>
                                            <div>
                                                <h3 className='certificateHeader'>AWS Cloud Practioner Certificate</h3>
                                                <p className='certificatePara'>
                                                    Issued Oct 2023 • Expires Oct 2026 <br />
                                                    Credential ID: Y3YCGE82V2411MS8 <br />
                                                    Skills: DevOps • Amazon Web Services (AWS)
                                                </p>
                                            </div>

                                        </Item>
                                    </a>
                                </Grid>
                            </Grid>
                        </Box>
                        <hr className='hline' />
                    </div>
                    <div className="content contentTechnology">
                        <h1>Technology</h1>
                        <Box className='boxForProjects' sx={{ width: '650px' }}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                <Grid xs={4}>
                                    <Item className='technologyItem' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 32 32"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >

                                            <title>react</title>
                                            <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>

                                        </svg>
                                        <p style={{ marginLeft: '65px', color: 'white' }}>React</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 512 512"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >

                                            <title>react</title>
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

<g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f0aa3"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M115.889,151.885l-24.053-13.773 c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899 c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306 c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107 l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0 c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733 c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317 c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0 c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448 c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0 l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014 c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057 l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449 l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738 c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1 c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122 v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312 c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095 c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387 c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236 l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771 C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0 l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856 c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832 c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769 c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0 l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06 c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576 c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504 l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323z M299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202 c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231 c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717 c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294 c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333 c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408z M438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979 c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979 c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z"> </path> </g> </g>

                                        </svg>
                                        <p style={{ marginLeft: '55px', color: 'white' }}>Node JS</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <div className='technologyIcon'></div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>

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
