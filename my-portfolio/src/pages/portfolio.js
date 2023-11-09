
import React, { useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AWSCPC from '../images/aws-certified-cloud-practitioner.png'
import './portfolio.css'
import { Chrono } from "react-chrono";



function Portfolio() {
    const introRef = useRef(null);
    const timelineRef = useRef(null);
    const projectRef = useRef(null);
    const certificateRef = useRef(null);
    const technologyRef = useRef(null);
    const usesRef = useRef(null);


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

    const scrollToTechnology = () => {
        if (technologyRef.current) {
            const offsetTop = technologyRef.current.getBoundingClientRect().top;
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

    const scrollToUses = () => {
        if (usesRef.current) {
            const offsetTop = usesRef.current.getBoundingClientRect().top;
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

    const items = [
        {
          title: "",
          cardDetailedText: (
            <p className='haivisionText'>
              2021-09-01 <br />
              First Software Developer Internship as SDET{" "}
              <span className='haivision'>
                <a href='https://www.haivision.com/' target="_blank" rel="noopener noreferrer">
                  @Haivision
                </a>
              </span>
            </p>
          ),
        },
        {
          title: "",
          cardDetailedText: (
            <p className='haivisionText'>
              2022-05-01 <br />
              Joined <span className='ukg'><a href='https://www.ukg.ca/' target="_blank" rel="noopener noreferrer">@UKG</a></span> as a Software Developer Intern
            </p>
          ),
        },
        {
            title: "",
            cardDetailedText: (
                <p  className='haivisionText'>
                    2023-04-01 <br />
                Graduated B.Eng from <span className='concordia'><a href='https://www.concordia.ca/' target="_blank">@Concordia University</a></span> as a Software Developer
            </p>
            ),
          },
      ];



    return (
        <div className=''>
            <div className='background' style={{ paddingBottom: '80px;' }}>
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
                            <a href="#" onClick={scrollToTechnology}>
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
                        <li className='list useslist' onClick={scrollToUses}>
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
                <div className='allContent' style={{ paddingBottom: '80px;' }}>
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
                        <div className='verticalTimline'>
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
                                    First Software Developer Internship as SDET <span className='haivision'><a href='https://www.haivision.com/' target="_blank">@Haivision</a></span>
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
                                    Joined <span className='ukg'><a href='https://www.ukg.ca/' target="_blank">@UKG</a></span> as a Software Developer Intern
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
                                    Graduated B.Eng from <span className='concordia'><a href='https://www.concordia.ca/' target="_blank">@Concordia University</a></span> as a Software Developer
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
                        </div>
                        <div className='chronoTimeline' style={{ width: '500px', height: '500px' }}>
                            <Chrono items={items}
                                mode="VERTICAL_ALTERNATING"
                                hideControls="false"

                                theme={{
                                    primary: 'white',
                                    secondary: 'black',
                                    cardBgColor: 'transparent',
                                    titleColor: 'black',
                                    titleColorActive: 'white',
                                }}

                            />
                        </div>
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
                    <div className="content contentTechnology" ref={technologyRef}>
                        <h1>Technology</h1>
                        <Box className='boxForProjects' sx={{ width: '650px' }}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                {/* 1st Row */}
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" />

                                            </g>

                                        </svg>
                                        <p style={{ marginLeft: '40px', color: 'white' }}>Spring Boot</p>
                                    </Item>
                                </Grid>
                                {/* 2nd Row */}
                                <Grid xs={4}>
                                    <Item className='technologyItem' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z" />

                                            </g>

                                        </svg>
                                        <p style={{ marginLeft: '65px', color: 'white' }}>My SQL</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
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
                                        <p style={{ marginLeft: '60px', color: 'white' }}>Python</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 32 32"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_blackgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M27.6947 22.9999C27.883 22.6617 28 22.2807 28 21.9385V10.0613C28 9.71913 27.8831 9.33818 27.6947 9L16 16L27.6947 22.9999Z" fill="grey" /> <path d="M17.0395 29.7433L26.9611 23.8047C27.2469 23.6336 27.5067 23.3382 27.695 23L16.0003 16L4.30566 23C4.49398 23.3382 4.75382 23.6337 5.03955 23.8047L14.9611 29.7433C15.5326 30.0855 16.468 30.0855 17.0395 29.7433Z" fill="grey" /> <path d="M27.6947 8.99996C27.5064 8.6617 27.2465 8.36629 26.9608 8.19521L17.0392 2.25662C16.4677 1.91446 15.5323 1.91446 14.9608 2.25662L5.03922 8.19521C4.46761 8.53729 4 9.37709 4 10.0613V21.9386C4 22.2807 4.11694 22.6618 4.30533 23L16 16L27.6947 8.99996Z" fill="grey" /> <path d="M16.0385 24C11.6061 24 8 20.4112 8 16C8 11.5888 11.6061 8 16.0385 8C18.8458 8 21.4674 9.47569 22.919 11.8618L19.4765 13.9265C18.7492 12.736 17.4399 12 16.0385 12C13.8222 12 12.0193 13.7944 12.0193 16C12.0193 18.2056 13.8222 20 16.0385 20C17.4362 20 18.7421 19.2681 19.4707 18.0832L22.9205 20.1359C21.4692 22.5234 18.8467 24 16.0385 24Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0001 13V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23 18H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001 17V15H22.9999V16.9948L25.0001 17Z" fill="white" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '75px', color: 'white' }}>C#</p>
                                    </Item>
                                </Grid>


                                {/* 3rd Row */}
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

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M29.86 8c-0.224-0.385-0.532-0.724-0.871-0.921l-11.755-6.787c-0.677-0.391-1.787-0.391-2.464 0l-11.755 6.787c-0.677 0.391-1.235 1.353-1.235 2.135v13.573c0 0.391 0.14 0.828 0.364 1.213 0.219 0.385 0.532 0.724 0.871 0.917l11.749 6.791c0.683 0.391 1.787 0.391 2.464 0l11.755-6.791c0.339-0.193 0.647-0.532 0.871-0.917s0.359-0.823 0.359-1.213v-13.573c0.005-0.391-0.135-0.828-0.353-1.213zM16 25.479c-5.229 0-9.479-4.249-9.479-9.479s4.249-9.479 9.479-9.479c3.385 0.005 6.511 1.812 8.208 4.733l-4.104 2.376c-0.849-1.464-2.411-2.365-4.104-2.371-2.615 0-4.74 2.125-4.74 4.74s2.125 4.74 4.74 4.74c1.693-0.005 3.255-0.907 4.104-2.371l4.104 2.376c-1.697 2.921-4.823 4.728-8.208 4.733zM25.479 16.527h-1.052v1.052h-1.057v-1.052h-1.052v-1.053h1.052v-1.052h1.057v1.052h1.052zM29.427 16.527h-1.052v1.052h-1.052v-1.052h-1.052v-1.053h1.052v-1.052h1.052v1.052h1.052z" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '70px', color: 'white' }}>C++</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
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
                                            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path fill="white" d="M16.392 2.991c-0.627 0.053-1.097 0.14-1.539 0.283-0.27 0.088-0.859 0.311-1.073 0.406-0.173 0.076-0.928 0.491-1.406 0.77-0.834 0.488-1.265 0.952-1.466 1.582-0.040 0.123-0.057 0.153-0.097 0.175-0.198 0.108-0.386 0.276-0.513 0.459-0.195 0.285-0.335 0.726-0.379 1.198-0.010 0.11-0.023 0.238-0.027 0.286l-0.008 0.086-0.195 0.171c-0.536 0.473-1.11 1.118-1.534 1.727-0.879 1.261-1.469 2.767-1.679 4.277-0.075 0.544-0.092 0.8-0.092 1.423s0.017 0.878 0.092 1.423c0.136 0.985 0.453 2.018 0.897 2.94 0.521 1.080 1.288 2.118 2.147 2.909l0.245 0.225 0.020 0.313c0.012 0.171 0.028 0.517 0.035 0.769 0.018 0.582 0.042 0.682 0.186 0.805 0.083 0.071 0.216 0.136 0.488 0.238 0.11 0.042 0.458 0.201 0.774 0.354 0.802 0.391 1.062 0.496 1.461 0.592 0.28 0.068 0.344 0.076 0.709 0.088l0.349 0.010 0.113 0.391c0.205 0.699 0.376 1.266 0.471 1.556 0.118 0.358 0.273 0.777 0.298 0.8 0.025 0.027 0.271 0.1 0.529 0.158 0.93 0.21 2.38 0.238 3.766 0.072 0.469-0.057 0.792-0.233 0.907-0.494 0.030-0.067 0.032-0.090 0.017-0.19-0.008-0.062-0.022-0.208-0.027-0.323l-0.012-0.21 0.148-0.028c0.484-0.093 0.726-0.22 0.832-0.436 0.035-0.073 0.045-0.121 0.052-0.261 0.012-0.215-0.008-0.353-0.113-0.819-0.142-0.614-0.17-0.847-0.133-1.068l0.021-0.12 0.105-0.035c0.225-0.075 0.325-0.186 0.325-0.364v-0.086l0.105-0.048c0.25-0.113 0.524-0.165 0.927-0.178l0.291-0.008 0.047 0.082c0.027 0.043 0.075 0.113 0.11 0.153 0.062 0.072 0.065 0.073 0.236 0.103 0.523 0.090 1.060 0.091 1.469 0.005 0.318-0.067 0.424-0.12 0.586-0.293 0.301-0.325 0.509-0.949 0.508-1.536 0-0.26-0.015-0.351-0.12-0.716-0.146-0.507-0.336-1.023-0.478-1.298-0.088-0.171-0.225-0.321-0.373-0.409-0.053-0.030-0.096-0.062-0.096-0.070 0-0.007 0.038-0.080 0.085-0.163 0.133-0.236 0.399-0.797 0.513-1.075 0.389-0.97 0.612-1.932 0.702-3.034 0.025-0.309 0.025-1.135 0-1.448-0.088-1.093-0.311-2.060-0.702-3.033-0.13-0.323-0.454-0.983-0.631-1.285-0.403-0.684-0.894-1.328-1.448-1.897l-0.259-0.266-0.030-0.329c-0.101-1.155-0.373-2.098-0.782-2.724-0.298-0.456-0.913-1.115-1.466-1.569-0.657-0.541-1.453-0.845-2.571-0.985-0.198-0.025-1.13-0.047-1.315-0.032zM17.649 3.619c0.637 0.103 1.268 0.301 1.835 0.579 0.399 0.196 0.601 0.344 0.927 0.681 0.228 0.236 0.812 0.963 0.845 1.053 0.012 0.028 0.005 0.030-0.067 0.020-0.304-0.040-0.454-0.028-0.629 0.055-0.215 0.1-0.336 0.27-0.345 0.481-0.002 0.038 0.002 0.075 0.007 0.080s0.037-0.010 0.072-0.033c0.131-0.090 0.233-0.117 0.449-0.117 0.181 0 0.215 0.005 0.358 0.055 0.228 0.077 0.398 0.183 0.574 0.359 0.321 0.319 0.431 0.699 0.491 1.706 0.030 0.486 0.040 1.459 0.018 1.764-0.095 1.343-0.451 2.588-1.008 3.534-0.123 0.21-0.552 0.852-0.656 0.982-0.138 0.171-0.318 0.333-0.518 0.463-0.601 0.391-1.233 0.646-1.824 0.739-0.241 0.037-0.691 0.037-0.905 0-0.228-0.040-0.567-0.16-0.874-0.309-0.8-0.391-1.338-0.909-2.201-2.122l-0.106-0.15 0.010 0.083c0.051 0.373 0.268 0.755 0.707 1.256 0.507 0.576 0.879 0.915 1.2 1.095 0.060 0.033 0.12 0.072 0.133 0.085 0.022 0.020 0.013 0.022-0.058 0.012-0.047-0.005-0.176-0.015-0.291-0.020-0.338-0.017-0.562 0.053-0.674 0.208l-0.050 0.070-0.175-0.010c-0.97-0.055-1.557-0.235-1.907-0.586-0.381-0.381-0.927-1.646-1.047-2.428-0.040-0.253-0.030-0.278 0.16-0.484 0.21-0.226 0.246-0.309 0.196-0.454-0.018-0.052-0.022-0.053-0.093-0.043-0.097 0.013-0.151 0.042-0.329 0.178-0.082 0.062-0.171 0.122-0.2 0.131-0.155 0.060-0.409 0.050-0.589-0.023-0.448-0.181-0.852-0.767-0.973-1.408-0.035-0.181-0.035-0.506 0-0.647 0.080-0.325 0.293-0.617 0.566-0.777 0.198-0.117 0.471-0.17 0.706-0.142 0.376 0.048 0.584 0.3 0.737 0.895l0.055 0.213 0.18-0.003c0.298-0.003 0.539-0.083 0.631-0.208 0.033-0.043 0.033-0.048 0.005-0.233-0.017-0.103-0.061-0.316-0.101-0.471-0.19-0.751-0.188-0.87 0.032-1.922 0.102-0.486 0.128-0.686 0.13-0.94 0.002-0.238-0.028-0.426-0.095-0.624-0.023-0.067-0.042-0.141-0.042-0.165 0-0.055 0.111-0.258 0.25-0.454 0.138-0.198 0.576-0.639 0.832-0.835 0.243-0.188 0.691-0.484 0.982-0.649 0.869-0.493 1.176-0.581 1.988-0.567 0.344 0.005 0.461 0.013 0.682 0.048zM14.321 4.080c0.088 0.070 0.020 0.193-0.135 0.243-0.060 0.018-0.113 0.053-0.178 0.115-0.052 0.048-0.17 0.146-0.265 0.216-0.261 0.196-0.348 0.295-0.544 0.621-0.213 0.353-0.316 0.489-0.413 0.551-0.098 0.063-0.188 0.075-0.378 0.052-0.2-0.027-0.303-0.010-0.662 0.108-0.313 0.101-0.429 0.125-0.429 0.088 0-0.013 0.037-0.087 0.083-0.161 0.321-0.541 0.924-1.047 1.722-1.448 0.288-0.145 0.461-0.218 0.782-0.33 0.28-0.098 0.348-0.106 0.416-0.055zM12.617 6.27c0.065 0.171 0.087 0.304 0.095 0.576 0.008 0.316-0.007 0.496-0.088 1.018-0.090 0.586-0.098 0.667-0.098 0.965 0 0.315 0.012 0.393 0.108 0.721 0.075 0.256 0.098 0.454 0.065 0.536-0.023 0.056-0.077 0.091-0.168 0.108l-0.060 0.012-0.012-0.113c-0.030-0.298-0.18-0.566-0.423-0.759-0.24-0.19-0.504-0.283-0.81-0.283-0.213 0-0.363 0.033-0.572 0.13-0.075 0.033-0.138 0.058-0.143 0.053-0.022-0.022-0.047-0.471-0.048-0.845 0-0.341 0.005-0.458 0.030-0.589 0.082-0.444 0.225-0.699 0.547-0.97 0.338-0.283 0.712-0.464 1.138-0.553 0.211-0.043 0.23-0.047 0.335-0.050 0.080-0.002 0.088 0.002 0.105 0.043zM9.948 8.998c0.017 0.015 0.027 0.058 0.028 0.115 0 0.050 0.007 0.091 0.015 0.091 0.007 0 0.012 0.037 0.012 0.083 0 0.045-0.007 0.083-0.015 0.083-0.007 0-0.010 0.018-0.007 0.038 0.005 0.023-0.003 0.052-0.018 0.067-0.015 0.013-0.027 0.033-0.027 0.043s-0.007 0.018-0.017 0.018c-0.008 0-0.017 0.010-0.017 0.023s-0.012 0.027-0.025 0.033c-0.013 0.005-0.025 0.020-0.025 0.033s-0.010 0.032-0.023 0.038c-0.022 0.013-0.143 0.361-0.143 0.413 0 0.013-0.005 0.025-0.012 0.025-0.008 0-0.013 0.025-0.015 0.053 0 0.030-0.010 0.145-0.022 0.255-0.052 0.486 0.083 1.158 0.334 1.664 0.288 0.578 0.782 0.983 1.336 1.097l0.1 0.022 0.005 0.065c0.025 0.354 0.175 0.795 0.378 1.113 0.208 0.326 0.273 0.519 0.225 0.666-0.035 0.108-0.13 0.178-0.591 0.441-0.975 0.557-1.657 0.968-1.98 1.196-0.091 0.065-0.301 0.188-0.464 0.271-0.426 0.22-0.557 0.353-0.586 0.596-0.020 0.171 0.065 0.512 0.253 1.023 0.060 0.165 0.153 0.424 0.206 0.576 0.053 0.153 0.168 0.459 0.255 0.682 0.226 0.582 0.285 0.779 0.393 1.301 0.073 0.348 0.201 1.201 0.201 1.329 0 0.095-0.473-0.418-0.87-0.944-0.85-1.125-1.434-2.43-1.707-3.814-0.070-0.354-0.123-0.717-0.112-0.764 0.007-0.025 0.003-0.040-0.008-0.040-0.013 0-0.017-0.025-0.010-0.083 0.007-0.055 0.003-0.083-0.008-0.083s-0.015-0.035-0.007-0.108c0.008-0.076 0.005-0.108-0.008-0.108s-0.015-0.043-0.007-0.158c0.008-0.11 0.007-0.158-0.007-0.158s-0.018-0.11-0.018-0.358c0-0.248 0.005-0.358 0.018-0.358s0.015-0.048 0.007-0.158c-0.008-0.115-0.007-0.158 0.007-0.158s0.017-0.032 0.008-0.108c-0.008-0.073-0.005-0.108 0.007-0.108s0.015-0.028 0.008-0.083c-0.007-0.052-0.003-0.083 0.007-0.083 0.012 0 0.015-0.030 0.008-0.075-0.003-0.042 0-0.075 0.008-0.075s0.012-0.027 0.008-0.058c-0.003-0.032 0-0.058 0.008-0.058s0.012-0.027 0.008-0.058c-0.003-0.032 0-0.058 0.008-0.058s0.013-0.023 0.008-0.050c-0.003-0.028 0-0.050 0.007-0.050 0.008 0 0.017-0.043 0.018-0.095 0.002-0.053 0.010-0.098 0.018-0.101 0.008-0.002 0.012-0.023 0.007-0.045-0.003-0.023 0-0.042 0.007-0.042 0.008 0 0.017-0.035 0.017-0.078 0.002-0.043 0.010-0.082 0.020-0.085s0.015-0.015 0.010-0.027c-0.023-0.058 0.285-1.138 0.328-1.155 0.008-0.003 0.015-0.022 0.015-0.040 0-0.048 0.068-0.23 0.085-0.23 0.008 0 0.015-0.018 0.015-0.042s0.008-0.042 0.017-0.042c0.010 0 0.017-0.018 0.017-0.042s0.008-0.042 0.017-0.042c0.010 0 0.017-0.018 0.017-0.040 0-0.023 0.012-0.052 0.025-0.067 0.013-0.013 0.025-0.033 0.025-0.045 0-0.035 0.040-0.131 0.053-0.131 0.007 0 0.013-0.012 0.013-0.025 0-0.032 0.087-0.213 0.108-0.228 0.010-0.007 0.035-0.052 0.057-0.1 0.1-0.23 0.125-0.278 0.147-0.286 0.012-0.005 0.022-0.025 0.022-0.043s0.015-0.047 0.033-0.062c0.018-0.017 0.033-0.042 0.033-0.058 0-0.015 0.013-0.042 0.032-0.058 0.017-0.017 0.035-0.050 0.042-0.076 0.005-0.025 0.018-0.045 0.027-0.045 0.010 0 0.017-0.012 0.017-0.025s0.007-0.025 0.015-0.025c0.008 0 0.020-0.018 0.025-0.042 0.007-0.023 0.018-0.042 0.027-0.042 0.010 0 0.017-0.012 0.017-0.025s0.007-0.025 0.015-0.025c0.008 0 0.020-0.018 0.025-0.042 0.007-0.023 0.018-0.042 0.027-0.042 0.010 0 0.017-0.012 0.017-0.025s0.008-0.025 0.017-0.025c0.010 0 0.017-0.012 0.017-0.025s0.008-0.025 0.017-0.025c0.010 0 0.017-0.012 0.017-0.025s0.008-0.025 0.017-0.025c0.010 0 0.017-0.012 0.017-0.025 0-0.015 0.012-0.030 0.025-0.035 0.013-0.007 0.025-0.020 0.025-0.033s0.008-0.023 0.017-0.023c0.010 0 0.017-0.010 0.017-0.023s0.012-0.027 0.025-0.033c0.013-0.005 0.025-0.020 0.025-0.035 0-0.013 0.008-0.025 0.017-0.025 0.010 0 0.017-0.010 0.017-0.023s0.012-0.027 0.025-0.033c0.013-0.005 0.025-0.020 0.025-0.033 0-0.012 0.012-0.027 0.025-0.033 0.013-0.005 0.025-0.020 0.025-0.033 0-0.012 0.012-0.027 0.025-0.033 0.013-0.005 0.025-0.020 0.025-0.033 0-0.015 0.015-0.033 0.033-0.043s0.033-0.027 0.033-0.038 0.015-0.030 0.033-0.042c0.018-0.012 0.033-0.030 0.033-0.042s0.015-0.030 0.033-0.042c0.018-0.012 0.033-0.030 0.033-0.042s0.023-0.038 0.050-0.058c0.028-0.022 0.050-0.046 0.050-0.058s0.027-0.042 0.058-0.067c0.032-0.025 0.058-0.055 0.058-0.065s0.045-0.060 0.1-0.108c0.055-0.050 0.1-0.098 0.1-0.107 0-0.023 0.321-0.348 0.343-0.348 0.012 0 0.023-0.015 0.028-0.033 0.010-0.040 0.038-0.043 0.073-0.007zM22.807 9.715c1.236 1.444 1.979 3.175 2.198 5.13 0.035 0.326 0.050 1.285 0.025 1.657-0.083 1.198-0.383 2.336-0.895 3.418-0.098 0.205-0.323 0.624-0.409 0.759l-0.043 0.068-0.161 0.022c-0.416 0.052-1.018 0.255-1.554 0.524-0.161 0.081-0.183 0.087-0.183 0.050 0-0.013 0.055-0.176 0.123-0.361 0.255-0.699 0.504-1.451 0.777-2.343 0.083-0.27 0.218-0.704 0.3-0.965 0.181-0.577 0.22-0.749 0.211-0.965-0.010-0.323-0.11-0.434-1.243-1.408-0.314-0.27-0.564-0.518-0.609-0.607-0.065-0.125-0.005-0.311 0.226-0.702 0.175-0.294 0.268-0.499 0.379-0.837 0.25-0.749 0.429-1.569 0.524-2.395 0.037-0.305 0.076-0.839 0.076-1.007 0-0.175 0.015-0.266 0.041-0.266 0.010 0 0.108 0.103 0.216 0.228zM21.043 15.262c0.055 0.047 0.291 0.271 0.524 0.499s0.508 0.478 0.607 0.556c0.268 0.21 0.398 0.341 0.459 0.468 0.053 0.106 0.053 0.108 0.043 0.294-0.012 0.193-0.070 0.488-0.203 1.040-0.171 0.701-0.449 1.529-0.86 2.558-0.268 0.669-0.328 0.76-0.534 0.82-0.17 0.048-0.206 0.053-0.652 0.070-0.411 0.017-0.549 0.037-0.674 0.1-0.078 0.040-0.1 0.042-0.1 0.007s0.118-0.236 0.749-1.271c0.492-0.807 0.854-1.413 0.92-1.543 0.025-0.045 0.023-0.053-0.005-0.098-0.017-0.027-0.078-0.103-0.138-0.17-0.108-0.122-0.162-0.208-0.162-0.261 0-0.015 0.027-0.105 0.057-0.196 0.235-0.691 0.115-1.819-0.233-2.207-0.076-0.085-0.21-0.168-0.27-0.168-0.045 0-0.17-0.087-0.17-0.118 0-0.017 0.073-0.085 0.171-0.161 0.093-0.072 0.203-0.17 0.245-0.216 0.042-0.045 0.087-0.083 0.1-0.085 0.013 0 0.070 0.037 0.125 0.083zM12.377 15.763c0.041 0.040 0.175 0.183 0.293 0.321 0.118 0.137 0.258 0.298 0.309 0.356 0.17 0.195 0.552 0.424 1.401 0.84l0.524 0.258 0.022 0.135c0.052 0.334 0.356 1.391 0.476 1.642 0.158 0.336 0.348 0.434 0.637 0.329 0.063-0.023 0.125-0.042 0.135-0.042 0.058 0-0.013 0.16-0.156 0.349-0.188 0.25-0.228 0.409-0.138 0.546 0.048 0.073 0.198 0.178 0.404 0.283 0.506 0.26 1.118 0.552 1.419 0.677 0.193 0.080 0.353 0.156 0.353 0.166 0 0.015-0.073 0.023-0.261 0.032-1.396 0.058-2.22 0.123-3.523 0.278-0.368 0.043-0.591 0.063-0.606 0.053-0.038-0.023-0.083-0.16-0.103-0.308-0.028-0.23-0.020-0.958 0.017-1.428 0.018-0.233 0.033-0.489 0.033-0.567 0-0.419-0.201-0.416-0.278 0.005-0.027 0.155-0.023 0.276 0.028 0.835 0.037 0.378 0.043 0.835 0.017 1.008-0.010 0.060-0.032 0.158-0.052 0.22-0.030 0.105-0.037 0.113-0.078 0.113-0.068-0.002-0.173-0.055-0.354-0.183-0.215-0.151-0.298-0.193-0.316-0.163-0.040 0.062-0.002 0.166 0.107 0.293 0.105 0.12 0.121 0.225 0.046 0.308-0.038 0.047-0.070 0.058-0.205 0.087-0.218 0.047-0.313 0.116-0.313 0.233 0 0.040 0.003 0.042 0.105 0.042 0.057 0 0.246-0.008 0.423-0.020 0.319-0.018 0.477-0.010 0.639 0.037l0.060 0.017 0.012 0.138c0.037 0.434 0.173 1.564 0.311 2.544 0.053 0.391 0.098 0.719 0.098 0.727 0 0.040-0.418 0-0.765-0.073-0.559-0.118-1.015-0.305-1.955-0.799-0.301-0.158-0.607-0.316-0.677-0.351l-0.13-0.063v-0.151c0-0.346-0.067-1.27-0.135-1.889-0.191-1.741-0.584-3.33-1.132-4.579-0.063-0.143-0.115-0.271-0.115-0.283 0-0.013 0.155-0.14 0.344-0.281 1.102-0.827 1.845-1.291 2.643-1.649 0.138-0.062 0.275-0.111 0.305-0.113 0.042 0 0.073 0.017 0.132 0.070zM20.531 16.283c0.17 0.087 0.29 0.476 0.341 1.101 0.027 0.341-0.022 0.674-0.116 0.802l-0.030 0.038-0.273-0.018c-0.441-0.028-1-0.111-1.263-0.188l-0.073-0.020 0.002-0.258c0.002-0.141 0.003-0.263 0.003-0.27 0-0.017 0.115-0.073 0.175-0.087 0.065-0.013 0.253-0.032 0.313-0.030 0.025 0.002 0.045-0.005 0.045-0.012 0-0.017-0.181-0.070-0.275-0.078-0.037-0.005-0.076-0.012-0.088-0.015-0.010-0.003-0.055 0-0.098 0.007-0.103 0.020-0.128 0.003-0.155-0.093-0.012-0.043-0.037-0.108-0.053-0.145-0.027-0.053-0.028-0.067-0.010-0.078 0.012-0.008 0.028-0.015 0.037-0.015 0.007 0 0.145-0.086 0.308-0.195 0.488-0.321 0.697-0.436 0.854-0.462 0.030-0.007 0.055-0.012 0.057-0.013 0.017-0.017 0.26 0.007 0.301 0.028zM19.271 16.284c0 0.013-0.015 0.032-0.032 0.042-0.018 0.008-0.17 0.125-0.336 0.258l-0.305 0.241-0.093 0.003c-0.356 0.012-0.627-0.032-0.837-0.133-0.161-0.080-0.328-0.195-0.328-0.228s0.075-0.048 0.13-0.027c0.083 0.033 0.276 0.068 0.393 0.068 0.161 0 0.423-0.042 0.75-0.12 0.273-0.065 0.567-0.125 0.629-0.128 0.015-0.002 0.028 0.010 0.028 0.023zM13.785 16.366c0.121 0.040 0.334 0.072 0.681 0.101 0.473 0.038 0.463 0.037 0.463 0.095 0 0.027-0.015 0.107-0.032 0.176-0.018 0.072-0.038 0.168-0.045 0.215-0.010 0.082-0.015 0.088-0.055 0.088-0.076 0-0.373-0.080-0.559-0.148-0.451-0.17-0.721-0.379-0.682-0.531 0.020-0.078 0.038-0.088 0.097-0.053 0.030 0.017 0.090 0.042 0.133 0.057zM15.822 16.424c0.018 0.008 0.037 0.013 0.042 0.010 0.023-0.023 0.677 0.193 0.904 0.299 0.349 0.165 0.441 0.213 0.626 0.335 0.105 0.070 0.283 0.138 0.381 0.148 0.023 0.002 0.050 0.005 0.060 0.005 0.010 0.002 0.018 0.033 0.020 0.068 0.003 0.062-0.002 0.068-0.073 0.108s-0.228 0.095-0.253 0.090c-0.012-0.002-0.060 0.010-0.25 0.063-0.088 0.025-0.108 0.067-0.023 0.050 0.097-0.020 0.582 0.117 0.632 0.178 0.010 0.012 0.013 0.085 0.008 0.186l-0.010 0.168-0.068 0.048c-0.037 0.028-0.195 0.155-0.351 0.285-0.155 0.128-0.343 0.278-0.416 0.329-0.309 0.223-0.968 0.476-1.241 0.476-0.080 0-0.098-0.007-0.138-0.048-0.027-0.028-0.050-0.067-0.053-0.088-0.005-0.035-0.107-0.326-0.141-0.404-0.072-0.162-0.191-0.524-0.208-0.629-0.005-0.030-0.012-0.072-0.017-0.095-0.038-0.191-0.057-0.686-0.033-0.948 0.005-0.068 0.010-0.136 0.012-0.15 0.010-0.123 0.105-0.353 0.173-0.416 0.070-0.065 0.153-0.093 0.275-0.090 0.062 0.002 0.126 0.012 0.145 0.022zM18.569 17.141c0.091 0.040 0.111 0.062 0.161 0.17 0.062 0.132 0.058 0.309-0.007 0.431-0.067 0.13-0.163 0.18-0.338 0.181-0.203 0-0.198 0.003-0.251-0.24-0.027-0.115-0.042-0.218-0.037-0.226 0.005-0.010 0.002-0.017-0.007-0.017-0.012 0-0.018-0.042-0.018-0.105 0-0.097 0.003-0.105 0.047-0.127 0.21-0.105 0.324-0.121 0.449-0.068zM18.932 18.188c0.038 0.018 0.13 0.073 0.203 0.125 0.165 0.115 0.291 0.175 0.401 0.188l0.085 0.010v0.1c0 0.056-0.007 0.185-0.017 0.285-0.008 0.102-0.023 0.368-0.033 0.592-0.025 0.567-0.053 0.845-0.135 1.348-0.035 0.223-0.088 0.408-0.116 0.413-0.032 0.005-0.225-0.388-0.506-1.037-0.354-0.817-0.552-1.193-0.8-1.527-0.060-0.082-0.106-0.158-0.103-0.17 0.003-0.013 0.043-0.068 0.088-0.125l0.083-0.102 0.075 0.012c0.123 0.018 0.173 0.010 0.353-0.068 0.196-0.085 0.306-0.096 0.423-0.043zM20.478 18.481c0.125 0.033 0.271 0.111 0.369 0.198 0.1 0.088 0.205 0.221 0.205 0.26 0 0.033-0.496 0.895-0.79 1.374-0.281 0.458-0.666 1.008-0.717 1.028-0.033 0.013-0.030-0.010 0.027-0.228 0.12-0.468 0.216-1.157 0.275-1.959 0.013-0.188 0.025-0.403 0.025-0.479 0-0.135 0.002-0.138 0.047-0.155 0.176-0.068 0.393-0.083 0.561-0.040zM17.71 18.9c0.359 0.508 0.581 0.935 1.038 2.022 0.095 0.228 0.173 0.424 0.173 0.438 0 0.040-0.048 0.030-0.336-0.068-0.516-0.178-0.995-0.381-1.563-0.664-0.398-0.198-0.78-0.406-0.78-0.422 0-0.007 0.015-0.062 0.035-0.12 0.090-0.278 0.283-0.547 0.554-0.776 0.16-0.135 0.734-0.536 0.769-0.537 0.010 0 0.060 0.058 0.11 0.128zM23.987 21.283c0.171 0.083 0.344 0.255 0.426 0.424 0.105 0.216 0.216 0.592 0.378 1.258 0.067 0.276 0.075 0.334 0.083 0.566 0.007 0.225 0.003 0.276-0.027 0.404-0.087 0.366-0.296 0.647-0.579 0.78-0.278 0.131-0.979 0.185-1.338 0.103-0.092-0.020-0.115-0.032-0.115-0.057 0-0.053 0.213-0.12 0.612-0.193 0.321-0.058 0.468-0.092 0.478-0.108 0.008-0.013-0.023-0.023-0.2-0.067-0.105-0.027-0.636-0.027-0.94-0.002-0.123 0.012-0.346 0.025-0.494 0.030l-0.268 0.012-0.010-0.090c-0.005-0.050-0.033-0.323-0.062-0.606-0.072-0.732-0.146-1.208-0.241-1.539l-0.027-0.091 0.072-0.062c0.138-0.118 0.456-0.26 1.027-0.453 0.323-0.11 0.531-0.195 0.661-0.271 0.153-0.090 0.203-0.105 0.333-0.1 0.090 0.005 0.143 0.018 0.231 0.060zM21.218 22.142c0.063 0.038 0.22 0.463 0.291 0.782 0.081 0.366 0.15 1.057 0.138 1.403l-0.005 0.171-0.216 0.073c-0.118 0.040-0.263 0.078-0.319 0.083l-0.102 0.012-0.010-0.072c-0.005-0.040-0.022-0.19-0.035-0.331-0.015-0.141-0.072-0.546-0.127-0.899-0.1-0.647-0.165-1.117-0.165-1.19 0-0.038 0.007-0.040 0.13-0.047 0.171-0.010 0.394-0.002 0.419 0.013zM17.865 22.15c0.381 0.023 1.067 0.102 1.102 0.125 0.008 0.005 0.053 0.378 0.070 0.574 0.023 0.273 0.032 0.426 0.060 1.123 0.025 0.562 0.032 0.656 0.083 1.198 0.032 0.333 0.055 0.769 0.075 1.423 0.030 0.982 0.067 1.464 0.143 1.92 0.022 0.136 0.038 0.25 0.037 0.251-0.017 0.010-0.285 0.078-0.446 0.115-0.478 0.105-0.945 0.15-1.523 0.15-0.671-0.002-1.181-0.052-1.789-0.173-0.275-0.055-0.724-0.168-0.74-0.186-0.003-0.003-0.053-0.163-0.113-0.356-0.428-1.38-0.727-2.737-0.959-4.341-0.093-0.637-0.188-1.459-0.173-1.473 0.018-0.017 0.88-0.156 1.27-0.208 0.537-0.068 1.142-0.121 1.672-0.146 0.263-0.013 0.994-0.010 1.231 0.005zM20.123 22.258c0.090 0.334 0.15 0.819 0.23 1.864 0.028 0.356 0.057 0.709 0.065 0.782 0.010 0.087 0.010 0.136-0.002 0.143-0.017 0.010-0.479 0.095-0.79 0.145-0.125 0.020-0.188 0.023-0.188 0.013s-0.012-0.165-0.025-0.343c-0.055-0.73-0.076-1.208-0.087-1.877-0.005-0.386-0.005-0.702 0-0.702s0.057-0.012 0.113-0.027c0.125-0.032 0.353-0.053 0.537-0.050 0.133 0.002 0.133 0.002 0.146 0.052zM20.080 25.588c0.030 0.008 0.038 0.027 0.047 0.111 0.007 0.056 0.053 0.298 0.103 0.536 0.125 0.596 0.158 0.809 0.168 1.098l0.010 0.25-0.19 0.062c-0.105 0.033-0.226 0.068-0.273 0.078-0.091 0.018-0.374 0.043-0.374 0.033 0-0.003-0.015-0.25-0.035-0.547-0.018-0.298-0.038-0.764-0.043-1.037l-0.010-0.494h0.053c0.030 0 0.127-0.018 0.215-0.040 0.088-0.023 0.185-0.045 0.211-0.048 0.028-0.003 0.058-0.008 0.066-0.008 0.010-0.002 0.033 0.002 0.052 0.007zM15.91 6.154c-0.14 0.023-0.336 0.111-0.524 0.236-0.158 0.103-0.414 0.363-0.521 0.526-0.143 0.218-0.236 0.509-0.211 0.659 0.012 0.067 0.088 0.165 0.128 0.165 0.012 0 0.052-0.062 0.088-0.138 0.142-0.29 0.358-0.569 0.556-0.716 0.115-0.085 0.295-0.166 0.446-0.203 0.095-0.023 0.167-0.027 0.358-0.020 0.13 0.005 0.255 0.013 0.276 0.020 0.032 0.010 0.040 0.003 0.062-0.048 0.040-0.093 0.032-0.163-0.028-0.253-0.117-0.173-0.381-0.27-0.629-0.228zM21.285 7.951c0 0.226 0.055 0.449 0.203 0.819 0.045 0.113 0.080 0.221 0.076 0.241-0.008 0.053-0.158 0.090-0.451 0.11-0.258 0.018-0.283 0.022-0.406 0.053-0.065 0.017-0.072 0.023-0.072 0.068 0 0.16 0.115 0.306 0.276 0.354 0.261 0.075 0.709-0.062 0.945-0.286 0.145-0.14 0.143-0.13 0.025-0.326-0.096-0.158-0.289-0.544-0.491-0.982-0.045-0.1-0.087-0.18-0.093-0.18-0.008 0-0.013 0.058-0.013 0.128zM17.033 7.921c-0.040 0.235 0.108 0.689 0.374 1.145 0.060 0.101 0.1 0.188 0.097 0.21-0.012 0.086-0.268 0.158-0.486 0.136-0.065-0.007-0.22-0.030-0.343-0.052-0.3-0.053-0.34-0.053-0.364 0.005-0.047 0.113-0.050 0.156-0.023 0.223 0.073 0.186 0.369 0.298 0.79 0.298 0.348 0 0.483-0.045 0.679-0.226 0.082-0.077 0.105-0.11 0.126-0.186 0.030-0.103 0.023-0.206-0.020-0.29-0.015-0.030-0.112-0.14-0.213-0.246-0.21-0.22-0.255-0.293-0.419-0.679-0.062-0.145-0.128-0.295-0.148-0.336l-0.038-0.073-0.012 0.072zM19.185 8.224c-0.025 0.013-0.030 0.040-0.030 0.138 0 0.456 0.265 1.055 0.729 1.657 0.12 0.153 0.523 0.637 0.687 0.824 0.166 0.19 0.223 0.351 0.181 0.527-0.027 0.113-0.093 0.245-0.13 0.258-0.015 0.005-0.185 0.083-0.378 0.173-0.446 0.206-0.596 0.268-0.782 0.321-0.221 0.062-0.388 0.083-0.567 0.072-0.29-0.017-0.349-0.073-0.438-0.418-0.028-0.108-0.052-0.201-0.052-0.203 0-0.003-0.006-0.007-0.017-0.007-0.028 0-0.098 0.16-0.117 0.273-0.035 0.196 0.035 0.443 0.171 0.601l0.058 0.067 0.251 0.005c0.679 0.017 1.306-0.186 2.072-0.667l0.248-0.156 0.028-0.115c0.015-0.063 0.047-0.168 0.070-0.231 0.023-0.065 0.052-0.16 0.062-0.211 0.033-0.16 0.020-0.185-0.261-0.461-0.724-0.709-1.513-1.805-1.607-2.236-0.018-0.081-0.043-0.146-0.072-0.178-0.043-0.053-0.063-0.058-0.108-0.032zM10.973 10.034c-0.16 0.055-0.28 0.185-0.343 0.374-0.040 0.117-0.037 0.123 0.035 0.058 0.1-0.097 0.136-0.115 0.231-0.115 0.047 0 0.092 0.007 0.097 0.017 0.005 0.008-0.010 0.078-0.035 0.153-0.037 0.115-0.046 0.176-0.053 0.364-0.008 0.261 0.018 0.429 0.095 0.589 0.098 0.205 0.096 0.208 0.105-0.226 0.008-0.339 0.013-0.403 0.045-0.501 0.058-0.181 0.171-0.258 0.309-0.213 0.083 0.028 0.148 0.112 0.261 0.343 0.057 0.115 0.126 0.235 0.156 0.27l0.053 0.062 0.012-0.115c0.052-0.478-0.22-0.93-0.637-1.058-0.131-0.040-0.218-0.042-0.331-0.002zM21.193 12.342c-0.634 0.336-0.855 0.423-1.213 0.481-0.081 0.013-0.155 0.033-0.163 0.045-0.015 0.025-0.018 0.426-0.003 0.516 0.010 0.062 0.013 0.063 0.080 0.063 0.113 0 0.363-0.060 0.516-0.121 0.384-0.156 0.762-0.534 1.033-1.032 0.033-0.062 0.058-0.111 0.055-0.111-0.002 0-0.14 0.072-0.305 0.16zM17.068 12.667c0.115 0.213 0.419 0.446 0.764 0.579 0.414 0.163 1.065 0.264 1.572 0.248l0.158-0.005-0.003-0.225c-0.002-0.123-0.010-0.258-0.017-0.3l-0.015-0.075-0.572-0.010c-0.942-0.017-1.426-0.091-1.904-0.29-0.027-0.012-0.025-0.002 0.017 0.077zM16.714 13.166c-0.085 0.025-0.096 0.067-0.040 0.141 0.027 0.037 0.087 0.102 0.135 0.148 0.047 0.045 0.153 0.178 0.236 0.294s0.196 0.266 0.253 0.333c0.294 0.344 0.619 0.463 1.266 0.463 0.531 0 1.018-0.098 1.185-0.24 0.052-0.043 0.171-0.21 0.171-0.238 0-0.008-0.271-0.012-0.604-0.008-0.995 0.012-1.409-0.045-1.817-0.245-0.276-0.136-0.469-0.321-0.579-0.554-0.048-0.103-0.058-0.113-0.103-0.111-0.027 0-0.075 0.008-0.103 0.017zM18.845 18.77c-0.1 0.060-0.113 0.206-0.028 0.291 0.123 0.123 0.321 0.033 0.321-0.146 0-0.050-0.012-0.075-0.057-0.12-0.067-0.067-0.153-0.076-0.236-0.025zM19.097 19.651c-0.090 0.030-0.141 0.1-0.141 0.191 0 0.052 0.012 0.076 0.057 0.122 0.048 0.048 0.068 0.057 0.133 0.057 0.060 0 0.087-0.010 0.13-0.048 0.048-0.043 0.055-0.058 0.055-0.133 0-0.072-0.006-0.092-0.050-0.133-0.052-0.050-0.126-0.073-0.183-0.055zM23.232 22.017c-0.409 0.073-0.742 0.24-0.932 0.466l-0.070 0.083h0.078c0.175 0 0.358-0.076 0.757-0.316 0.241-0.145 0.384-0.22 0.483-0.25 0.083-0.027-0.138-0.015-0.316 0.017zM22.887 22.715c-0.116 0.022-0.253 0.076-0.313 0.125-0.042 0.035-0.047 0.045-0.025 0.060 0.037 0.025 0.587 0.005 0.973-0.035 0.175-0.018 0.331-0.033 0.349-0.035 0.055-0.003-0.14-0.060-0.308-0.088-0.19-0.033-0.558-0.048-0.677-0.027zM22.737 23.406c-0.093 0.025-0.213 0.081-0.228 0.105s0.235 0.037 0.913 0.047c0.567 0.006 0.627 0.005 0.579-0.017-0.078-0.037-0.371-0.106-0.563-0.135-0.21-0.032-0.586-0.032-0.702 0z" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '60px', color: 'white' }}>Jenkins</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 32 32"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <title>docker</title> <path d="M30.679 13.367c-0.613-0.404-1.366-0.645-2.175-0.645-0.093 0-0.185 0.003-0.276 0.009l0.012-0.001c-0.446 0.001-0.882 0.041-1.306 0.115l0.046-0.007c-0.235-1.357-1.025-2.495-2.122-3.191l-0.019-0.011-0.429-0.248-0.282 0.408c-0.336 0.512-0.599 1.108-0.756 1.745l-0.008 0.039c-0.089 0.324-0.14 0.696-0.14 1.080 0 0.831 0.24 1.605 0.654 2.258l-0.010-0.017c-0.637 0.299-1.381 0.488-2.164 0.524l-0.013 0h-19.729c-0.516 0.001-0.934 0.418-0.936 0.933v0c-0.001 0.056-0.001 0.123-0.001 0.19 0 1.751 0.317 3.428 0.897 4.977l-0.032-0.098c0.558 1.633 1.612 2.975 2.98 3.881l0.028 0.017c1.744 0.903 3.808 1.432 5.995 1.432 0.207 0 0.412-0.005 0.617-0.014l-0.029 0.001c0.018 0 0.039 0 0.060 0 1.272 0 2.515-0.121 3.72-0.352l-0.123 0.020c1.795-0.336 3.395-0.939 4.845-1.773l-0.074 0.039c1.257-0.735 2.331-1.621 3.245-2.652l0.012-0.014c1.325-1.56 2.403-3.381 3.145-5.365l0.041-0.125h0.276c0.055 0.002 0.119 0.004 0.183 0.004 1.226 0 2.34-0.481 3.163-1.265l-0.002 0.002c0.377-0.358 0.676-0.793 0.873-1.281l0.009-0.024 0.122-0.359zM3.79 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 14.849h2.644c0.127 0 0.231-0.103 0.231-0.231 0 0 0 0 0-0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0 0-0 0-0 0-0.128 0-0.232 0.104-0.232 0.232 0 0 0 0 0 0v0 2.355c0.001 0.128 0.104 0.231 0.232 0.231v0zM11.132 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0.127 0.103 0.231 0.231 0.231v0zM14.788 14.849h2.643c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 11.461h2.644c0.128-0.001 0.231-0.104 0.231-0.232 0 0 0 0 0 0v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.644c-0.128 0-0.231 0.103-0.232 0.231v2.355c0.001 0.128 0.104 0.231 0.232 0.232h0zM11.132 11.461h2.646c0.127-0.001 0.23-0.105 0.23-0.232v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0.001 0.128 0.103 0.231 0.231 0.232h0zM14.788 11.461h2.643c0.128-0.001 0.231-0.104 0.232-0.232v-2.355c-0.001-0.128-0.104-0.231-0.232-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0 0.128 0.103 0.231 0.231 0.232h0zM14.788 8.073h2.643c0 0 0 0 0 0 0.128 0 0.232-0.104 0.232-0.232 0-0 0-0 0-0v0-2.356c-0.001-0.128-0.104-0.231-0.232-0.231 0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM18.475 14.849h2.644c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.644c0 0 0 0-0 0-0.128 0-0.231 0.103-0.231 0.231v2.356c0 0.127 0.103 0.231 0.231 0.231v0z" /> </g>
                                        </svg>
                                        <p style={{ marginLeft: '57px', color: 'white' }}>Docker</p>
                                    </Item>
                                </Grid>
                                {/* 4th Row */}
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

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <title>selenium</title> <path d="M20.606 19.981c-0.020-0.001-0.043-0.001-0.066-0.001-1.126 0-2.055 0.848-2.182 1.94l-0.001 0.010c-0 0.002-0 0.005-0 0.008 0 0.041 0.034 0.075 0.075 0.075 0 0 0 0 0 0h4.364c0 0 0 0 0 0 0.041 0 0.075-0.034 0.075-0.075 0-0.003-0-0.005-0-0.008l0 0c-0.089-1.098-1.002-1.955-2.115-1.955-0.052 0-0.104 0.002-0.156 0.006l0.007-0zM25.21 23.415c0 0.133-0.107 0.24-0.24 0.24v0h-6.501c-0 0-0 0-0 0-0.041 0-0.075 0.034-0.075 0.075 0 0.003 0 0.005 0 0.008l-0-0c0.211 1.174 1.225 2.054 2.445 2.054 0.066 0 0.131-0.003 0.196-0.008l-0.009 0.001c0.846-0.023 1.623-0.301 2.262-0.758l-0.012 0.008c0.040-0.032 0.092-0.051 0.148-0.051 0.081 0 0.153 0.041 0.197 0.102l0 0.001 0.795 1.162c0.026 0.038 0.041 0.086 0.041 0.136 0 0.078-0.036 0.148-0.093 0.193l-0 0c-0.958 0.704-2.161 1.127-3.463 1.127-0.053 0-0.106-0.001-0.159-0.002l0.008 0c-0.077 0.005-0.168 0.007-0.259 0.007-2.572 0-4.656-2.085-4.656-4.656 0-0.066 0.001-0.131 0.004-0.196l-0 0.009c-0.001-0.041-0.002-0.088-0.002-0.136 0-2.584 2.095-4.679 4.679-4.679 0.030 0 0.059 0 0.089 0.001l-0.004-0c0.006-0 0.014-0 0.021-0 2.543 0 4.605 2.062 4.605 4.605 0 0.161-0.008 0.319-0.024 0.476l0.002-0.020zM9.667 27.704c-0.095 0.005-0.206 0.007-0.318 0.007-1.825 0-3.489-0.685-4.75-1.813l0.007 0.006c-0.041-0.048-0.066-0.111-0.066-0.18s0.025-0.132 0.067-0.18l-0 0 1.102-1.545c0.051-0.071 0.133-0.117 0.226-0.117 0.072 0 0.137 0.027 0.186 0.072l-0-0c0.964 0.897 2.262 1.447 3.687 1.447 0.006 0 0.012 0 0.018-0h-0.001c1.447 0 2.152-0.667 2.152-1.372 0-2.189-7.123-0.69-7.123-5.346 0-2.062 1.784-3.749 4.694-3.749 0.074-0.003 0.161-0.004 0.248-0.004 1.668 0 3.2 0.587 4.398 1.566l-0.012-0.010c0.045 0.049 0.073 0.115 0.073 0.187s-0.028 0.138-0.073 0.188l0-0-1.132 1.5c-0.051 0.066-0.131 0.109-0.22 0.109-0.068 0-0.129-0.024-0.178-0.064l0 0c-0.908-0.729-2.074-1.17-3.343-1.17-0.014 0-0.027 0-0.041 0h0.002c-1.132 0-1.762 0.502-1.762 1.245 0 1.964 7.108 0.652 7.108 5.248 0.007 2.264-1.605 3.974-4.949 3.974zM29.963 5.338l-9.267 10.4c-0.052 0.054-0.125 0.088-0.206 0.088s-0.154-0.034-0.206-0.088l-0-0-4.731-4.874c-0.038-0.048-0.061-0.109-0.061-0.176s0.023-0.128 0.061-0.177l1.537-2.009c0.052-0.070 0.135-0.115 0.229-0.115s0.176 0.045 0.228 0.114l0.001 0.001 2.632 2.932c0.052 0.059 0.129 0.096 0.214 0.096s0.161-0.037 0.213-0.096l0-0 7.423-10.115c0.021-0.032 0.034-0.071 0.034-0.113 0-0.108-0.085-0.196-0.191-0.202l-0.001-0h-25.973c-0.12 0-0.217 0.097-0.217 0.217v0 29.556c0 0 0 0 0 0 0 0.12 0.097 0.217 0.217 0.217 0 0 0 0 0 0h28.199c0 0 0 0 0 0 0.12 0 0.217-0.097 0.217-0.217 0 0 0 0 0-0v0-25.275c0.002-0.010 0.003-0.021 0.003-0.032 0-0.112-0.091-0.202-0.202-0.202-0.061 0-0.115 0.027-0.152 0.069l-0 0z" /> </g>
                                        </svg>
                                        <p style={{ marginLeft: '50px', color: 'white' }}>Selenium</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '70px',
                                                width: '70px',
                                                color: 'white',
                                                paddingTop: '20px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path d="m10.013 13.738-2.254.387a4.475 4.475 0 0 0 1.753 2.231l.865-2.095a.27.27 0 0 0 .022-.228c-.022-.18-.204-.295-.386-.295zm.865-2.914c.205 0 .387-.159.387-.364l.114-2.277-.456.091a4.516 4.516 0 0 0-2.118 1.162l1.89 1.343c.069.022.115.045.183.045zm-1.002 1.48a.366.366 0 0 0-.045-.524l-1.685-1.503a4.797 4.797 0 0 0-.661 2.778l2.209-.637c.091-.023.137-.046.182-.114zm1.457.797.616.296.614-.296.16-.661-.433-.546h-.683l-.433.546zm1.344-2.436c.114.159.341.182.5.091l1.867-1.32a4.286 4.286 0 0 0-2.573-1.23l.137 2.3a.215.215 0 0 0 .069.159z" />

                                                <path d="m21.944 14.103-1.73-7.446c-.113-.364-.387-.66-.729-.842L12.541 2.49c-.182-.091-.387-.114-.569-.114s-.387 0-.569.045L4.457 5.769a1.22 1.22 0 0 0-.683.842l-1.708 7.492c-.068.387.023.774.25 1.093l4.805 5.943c.273.273.66.456 1.047.479h7.651c.41.045.797-.137 1.048-.479l4.805-5.943c.227-.319.318-.706.272-1.093zm-2.845.501c-.046 0-.068 0-.114-.023-.022-.023-.022-.023-.045-.023-.046 0-.068-.022-.092-.022-.091-.023-.159-.068-.25-.114a.32.32 0 0 1-.137-.045h-.022a3.91 3.91 0 0 0-.729-.205h-.022a.26.26 0 0 0-.182.068s0 .023-.023.023l-.183-.024a5.628 5.628 0 0 1-2.46 3.097l.068.182s-.022 0-.022.022a.264.264 0 0 0-.022.228c.091.228.205.455.364.66v.045a.396.396 0 0 1 .091.114.81.81 0 0 1 .159.228c.023.022.046.045.046.068 0 0 .022 0 .022.022a.582.582 0 0 1 .023.342.38.38 0 0 1-.205.25c-.068.022-.114.045-.183.045a.511.511 0 0 1-.433-.273c-.022 0-.022-.022-.022-.022-.022-.023-.022-.045-.046-.068-.045-.068-.068-.159-.091-.25l-.046-.137v-.022a3.816 3.816 0 0 0-.296-.706.353.353 0 0 0-.182-.137c0-.023 0-.023-.023-.023l-.091-.159c-.228.068-.479.159-.729.205-.41.114-.82.159-1.229.159a5.368 5.368 0 0 1-1.981-.364l-.091.182c0 .023 0 .023-.023.023a.35.35 0 0 0-.182.137c-.114.228-.228.455-.296.706l-.045.137c-.023.091-.068.159-.091.25-.022.023-.045.045-.045.068-.023 0-.023.022-.023.022a.508.508 0 0 1-.433.273.434.434 0 0 1-.159-.045.469.469 0 0 1-.182-.615c.023 0 .023-.023.023-.023.022-.023.022-.045.045-.068.068-.091.114-.182.159-.228s.068-.068.091-.114v-.023a3.73 3.73 0 0 0 .364-.66.268.268 0 0 0-.023-.228s-.022 0-.022-.022l.114-.16a3.578 3.578 0 0 1-.615-.41 5.493 5.493 0 0 1-1.867-2.664l-.205.022s0-.022-.023-.022a.256.256 0 0 0-.182-.068h-.022a4.015 4.015 0 0 0-.751.205h-.024c-.045 0-.091.023-.137.046-.068.022-.159.068-.25.091-.022 0-.091-.022-.091 0 0 .023 0 .023-.023.023-.045.023-.068.023-.114.023a.424.424 0 0 1-.456-.319.445.445 0 0 1 .364-.524c.023-.023.023-.023.046-.023.045 0 .068-.022.091-.022.091 0 .182-.023.273-.023.045-.022.091-.022.137-.022a4.2 4.2 0 0 0 .774-.137c.068-.046.137-.091.16-.16 0 0 .022 0 .022-.022l.182-.046c-.205-1.298.091-2.618.797-3.734.022-.045.045-.068.068-.114l-.131-.132a.106.106 0 0 1-.004.019v-.023l.004.004c.01-.065-.031-.145-.072-.186-.182-.182-.41-.319-.638-.455l-.136-.069a2.587 2.587 0 0 1-.251-.136c-.022 0-.068-.045-.068-.045s0-.023-.022-.023a.49.49 0 0 1-.092-.639c.068-.114.182-.159.319-.159a.54.54 0 0 1 .319.114l.023.023c.022.022.045.022.068.045.068.069.114.137.182.205.023.022.068.045.091.091.159.182.364.364.569.524.045.022.091.045.137.045.045 0 .068-.023.091-.023h.023l.137.091a5.426 5.426 0 0 1 2.801-1.594c.273-.046.523-.091.774-.114l.023-.182v-.045c.068-.045.091-.114.114-.182 0-.273 0-.524-.045-.774v-.023c0-.045 0-.091-.023-.137a1.129 1.129 0 0 1-.045-.273v-.113c0-.114.045-.228.137-.319.114-.114.25-.182.387-.159a.45.45 0 0 1 .387.478v.137c-.023.091-.023.182-.045.273 0 .045-.023.091-.023.136v.023c-.048.273-.048.524-.048.774.023.068.045.136.114.182v-.023l.023.182a5.84 5.84 0 0 1 2.96 1.184c.183.182.387.364.569.546l.183-.114h.022c.022.023.068.023.091.023.046 0 .091-.023.137-.045.205-.137.41-.319.569-.501.022-.023.068-.046.091-.091.046-.068.114-.137.183-.205.022 0 .045-.022.068-.045l.022-.023a.546.546 0 0 1 .318-.114c.114 0 .251.068.319.16.159.205.113.478-.091.637 0 .023.022.023 0 .046-.023.022-.046.022-.068.045-.092.045-.16.091-.251.137l-.137.068a4.104 4.104 0 0 0-.638.455c-.045.046-.068.137-.068.205v.023l-.136.137c.364.569.638 1.207.797 1.867.137.66.182 1.343.091 2.003l.182.046a.278.278 0 0 0 .16.159c.25.068.523.114.773.137h.023a.297.297 0 0 0 .137.022c.091 0 .182 0 .272.023.046 0 .092 0 .092.023 0 .022.022.022.045.022a.537.537 0 0 1 .41.479.49.49 0 0 1-.453.32z" />

                                                <path d="M12.085 14.718a.352.352 0 0 0-.455.091l-1.116 2.027c.456.136.957.228 1.435.228.341 0 .66-.045.979-.114.159-.045.296-.068.433-.091l-1.093-1.981c-.069-.069-.115-.115-.183-.16zm3.644-4.441-1.708 1.548a.36.36 0 0 0-.091.16c-.046.205.068.41.273.455l2.163.615a4.375 4.375 0 0 0-.092-1.435 4.63 4.63 0 0 0-.545-1.343zm-2.073 3.484a.371.371 0 0 0-.205.433l.889 2.141a4.366 4.366 0 0 0 1.366-1.366c.182-.25.318-.547.433-.865l-2.277-.387a.634.634 0 0 0-.206.044z" />

                                            </g>
                                        </svg>
                                        <p style={{ marginLeft: '50px', color: 'white' }}>Kubernetes</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="-2 0 24 24"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path d="m8.782 5.505c-.092.005-.17.06-.207.139l-.001.002q-.06.127-.114.127-.067.014-.067-.067 0-.16.254-.201zm1.164.187q-.054.014-.154-.087c-.041-.044-.099-.072-.163-.072-.026 0-.05.004-.073.012h.002q.32-.147.429.026c.009.013.014.028.014.045 0 .035-.022.064-.053.075h-.001zm-4.7 5.719c-.006-.002-.012-.003-.019-.003-.028 0-.052.018-.061.042-.022.046-.042.102-.058.16l-.002.008c-.019.069-.044.129-.076.185l.002-.004c-.042.065-.086.122-.135.175l.001-.001q-.134.147-.014.16.054.014.167-.094c.071-.066.128-.146.166-.236l.002-.004q.014-.04.026-.094c.007-.031.016-.057.027-.083l-.001.003c.009-.017.016-.037.02-.058v-.002c.004-.016.006-.034.006-.053v-.04l-.014-.034zm11.45 4.808q0-.24-.737-.56.054-.201.101-.368c.029-.099.053-.217.066-.338l.001-.01q.02-.181.04-.288c.008-.053.013-.115.013-.177 0-.044-.002-.087-.007-.13v.005q-.014-.194-.014-.261c-.009-.11-.026-.21-.05-.308l.003.013q-.047-.228-.054-.274t-.067-.334-.074-.355c-.129-.526-.346-.987-.638-1.391l.008.012c-.248-.406-.571-.742-.952-.997l-.012-.007c.309.314.565.682.753 1.087l.01.024c.511.775.815 1.726.815 2.748 0 .345-.035.682-.101 1.007l.005-.032c-.061.32-.337.558-.669.56q-.415.054-.515-.248c-.07-.288-.11-.619-.11-.959 0-.057.001-.113.003-.169v.008c0-.009 0-.02 0-.032 0-.497-.056-.98-.163-1.445l.008.043c-.084-.375-.174-.684-.28-.986l.019.062c-.078-.236-.166-.438-.271-.629l.01.019q-.121-.207-.207-.328c-.053-.075-.111-.141-.174-.2l-.001-.001-.095-.094c-.114-.533-.257-.994-.436-1.437l.021.058c-.106-.286-.24-.534-.402-.759l.006.009c-.108-.13-.212-.274-.305-.426l-.009-.016c-.136-.211-.217-.468-.217-.745 0-.183.035-.357.099-.517l-.003.009c.052-.128.083-.277.083-.433 0-.082-.008-.161-.024-.238l.001.008q-.074-.228-.596-.334c-.227-.061-.425-.143-.609-.247l.013.007c-.135-.078-.291-.15-.455-.208l-.02-.006q-.107-.014-.147-.348c-.005-.043-.008-.093-.008-.143 0-.196.042-.381.118-.548l-.003.008c.069-.206.256-.354.479-.362h.001c.03-.005.065-.008.1-.008.267 0 .494.168.582.404l.001.004c.068.132.108.287.108.452 0 .116-.02.228-.056.332l.002-.007q-.147.254-.026.355t.4.006q.174-.054.174-.48v-.498c-.038-.251-.101-.476-.188-.69l.007.02c-.063-.162-.159-.299-.281-.408l-.001-.001c-.09-.08-.194-.147-.307-.198l-.008-.003c-.103-.042-.224-.077-.35-.099l-.011-.002q-1.433.107-1.192 1.794c.002.019.003.04.003.062 0 .049-.006.097-.018.143l.001-.004c-.105-.088-.241-.141-.39-.141-.002 0-.004 0-.006 0-.058-.006-.124-.009-.192-.009-.088 0-.175.006-.26.017l.01-.001q-.167.026-.207-.067c.003-.05.005-.109.005-.168 0-.376-.081-.733-.226-1.054l.007.016c-.098-.251-.326-.43-.6-.455h-.003c-.005 0-.011 0-.017 0-.244 0-.452.151-.537.364l-.001.004c-.122.232-.202.505-.22.794v.006c-.001.02-.001.044-.001.068 0 .151.018.299.051.44l-.003-.013c.036.189.096.357.179.512l-.005-.01q.114.207.207.181c.095-.032.171-.099.213-.185l.001-.002q.054-.121-.094-.107-.094 0-.207-.194c-.075-.129-.121-.283-.127-.447v-.002c-.002-.02-.003-.043-.003-.067 0-.159.046-.307.126-.432l-.002.003c.088-.117.228-.192.384-.192.025 0 .05.002.074.006h-.003c.17.011.31.124.361.279l.001.003c.08.152.127.332.127.522v.01c0 .1-.007.199-.021.295l.001-.011c-.164.104-.302.233-.412.384l-.003.004c-.098.13-.221.235-.362.311l-.006.003q-.261.154-.274.167c-.099.096-.171.219-.206.356l-.001.005c-.006.019-.01.04-.01.062 0 .078.045.145.11.177l.001.001c.128.074.239.16.335.26.076.077.147.16.21.248l.004.006c.063.08.147.14.244.173l.004.001c.141.053.304.085.474.087h.001c.03.001.066.001.101.001.452 0 .887-.074 1.293-.21l-.029.008q.026-.014.308-.094t.462-.141c.154-.054.284-.113.409-.181l-.013.007c.116-.052.211-.132.28-.232l.001-.002q.121-.187.268-.107c.043.025.074.065.087.112v.001c.002.011.004.025.004.038 0 .046-.017.089-.044.122-.055.066-.131.112-.219.127h-.002c-.312.101-.563.199-.807.308l.05-.02q-.489.207-.61.261c-.269.129-.583.236-.911.303l-.027.005c-.137.018-.295.029-.456.029-.214 0-.424-.019-.628-.054l.022.003q-.134-.026-.121.026c.063.099.138.183.226.253l.002.002c.214.185.495.298.802.298.034 0 .067-.001.1-.004h-.004c.176-.013.339-.046.494-.098l-.014.004c.191-.06.35-.124.503-.197l-.023.01q.228-.107.449-.234t.4-.228c.089-.051.197-.105.308-.152l.02-.008c.048-.025.105-.04.166-.04.024 0 .048.002.071.007h-.002c.062.024.106.08.114.146v.001c-.001.022-.006.042-.014.061v-.001c-.013.027-.031.05-.053.067-.024.02-.05.04-.077.058l-.003.002q-.04.026-.114.067t-.121.06-.134.067c-.035.021-.077.041-.121.058l-.006.002c-.344.185-.64.38-.916.599l.012-.01c-.26.207-.551.399-.86.561l-.03.015c-.098.057-.215.091-.34.091-.115 0-.224-.028-.319-.079l.004.002c-.34-.268-.622-.592-.835-.962l-.009-.016q-.294-.415-.334-.294c-.009.034-.014.073-.014.114v.021-.001c-.011.278-.084.537-.205.767l.005-.01q-.201.422-.395.743c-.132.224-.23.485-.28.763l-.002.014c-.015.07-.024.15-.024.232 0 .227.066.439.181.617l-.003-.005q-.308.08-.837 1.206c-.285.546-.507 1.178-.633 1.845l-.007.043q-.026.24-.02.924c.007.064.012.139.012.215 0 .205-.031.403-.089.59l.004-.014q-.107.32-.388.04c-.298-.327-.48-.764-.48-1.244 0-.005 0-.011 0-.016v.001c-.004-.056-.007-.121-.007-.187 0-.199.022-.393.064-.58l-.003.018q.054-.254-.014-.24c-.024.016-.043.039-.053.066v.001c-.131.289-.208.627-.208.982 0 .458.127.886.347 1.252l-.006-.011c.083.152.196.277.331.373l.003.002q.268.214.32.268c.426.424.881.821 1.359 1.187l.033.025q1.125.904 1.246 1.025c.137.128.226.307.234.507v.002c.001.012.001.027.001.042 0 .45-.354.817-.799.838h-.002c.133.231.261.426.4.612l-.012-.016c.157.206.285.445.37.703l.005.017c.061.249.095.534.095.828 0 .041-.001.082-.002.122v-.006q.616-.32.094-1.232c-.042-.082-.089-.152-.142-.216l.002.002q-.087-.107-.127-.16t-.026-.08c.044-.057.103-.101.172-.126l.003-.001c.031-.015.068-.023.107-.023.061 0 .118.021.162.057q.616.696 2.223.48h.006c.96 0 1.814-.454 2.359-1.158l.005-.007q.308-.509.455-.4.16.08.134.696c-.062.46-.17.876-.321 1.27l.013-.038c-.055.114-.087.249-.087.39 0 .039.002.078.007.117v-.005q.04.194.32.207.04-.254.194-1.031c.077-.337.141-.749.178-1.168l.003-.038c.001-.028.001-.061.001-.094 0-.315-.032-.622-.093-.919l.005.029c-.065-.361-.101-.777-.101-1.201 0-.035 0-.069.001-.103v.005c0-.013-.001-.028-.001-.044 0-.341.116-.655.311-.904l-.002.003c.153-.151.363-.245.595-.245.031 0 .062.002.092.005h-.004c0-.004 0-.008 0-.012 0-.312.188-.579.458-.695l.005-.002c.209-.101.454-.161.714-.161.091 0 .18.007.267.021l-.01-.001c.309.026.589.135.822.304l-.005-.003zm-8.41-11.076c.009-.043.015-.093.015-.144 0-.092-.018-.18-.05-.261l.002.005q-.074-.174-.154-.201-.121-.026-.121.094c.01.036.034.064.066.08h.001q.134 0 .094.201-.04.268.107.268c.002 0 .004.001.006.001.019 0 .035-.016.035-.035 0-.002 0-.005-.001-.007zm5.611 2.64c-.012-.062-.043-.115-.087-.154-.049-.035-.108-.058-.172-.067h-.002c-.073-.012-.139-.038-.196-.075l.002.001c-.049-.03-.091-.066-.127-.107l-.001-.001q-.06-.067-.094-.107l-.074-.087c-.016-.02-.033-.038-.053-.053h-.001q-.014-.006-.054.02-.187.214.094.582c.122.193.302.341.515.419l.007.002c.006.001.014.001.021.001.076 0 .141-.044.173-.107l.001-.001c.034-.055.055-.122.055-.194 0-.027-.003-.052-.008-.077v.002zm-2.383-2.852c0-.001 0-.003 0-.004 0-.174-.084-.328-.213-.424l-.001-.001q-.08-.054-.121-.04c-.006-.001-.012-.001-.019-.001-.033 0-.064.01-.089.028-.008.006-.013.016-.013.027s.005.021.013.027c.018.018.041.032.066.04h.001q.187.054.24.415 0 .04.107-.026.028-.029.028-.04zm.72-3.12c-.004-.027-.016-.05-.034-.067-.034-.036-.072-.067-.114-.091l-.002-.001q-.087-.054-.127-.08c-.078-.1-.189-.172-.316-.2l-.004-.001h-.001c-.068 0-.127.041-.153.1v.001c-.013.032-.021.07-.021.109 0 .023.003.046.008.068v-.002c.006.022.009.047.009.072 0 .034-.006.066-.016.097l.001-.002c-.019.054-.046.101-.08.141v-.001c-.03.035-.056.075-.078.117l-.002.004q-.014.034.04.114c.014.013.033.021.054.021s.039-.008.054-.021q.054-.04.147-.121c.057-.05.124-.091.196-.119l.005-.002c.027-.01.058-.015.09-.015.011 0 .022.001.032.002h-.001.006c.069 0 .136-.01.199-.028l-.005.001c.053-.012.096-.047.118-.094v-.001zm7.566 17.959c.159.092.296.2.414.327l.001.001c.083.084.141.194.16.317v.003c.002.02.003.044.003.068 0 .084-.013.164-.038.239l.002-.005c-.044.118-.115.217-.206.294l-.001.001c-.095.088-.198.173-.304.254l-.01.007c-.115.083-.245.166-.382.239l-.018.009q-.248.134-.422.221t-.429.207-.362.174c-.436.23-.81.479-1.158.76l.013-.01c-.374.287-.703.567-1.018.863l.007-.006c-.241.164-.538.262-.858.262-.018 0-.037 0-.055-.001h.003c-.068.007-.147.011-.227.011-.349 0-.681-.076-.98-.211l.015.006c-.157-.077-.289-.183-.394-.312l-.002-.002c-.083-.099-.156-.212-.216-.332l-.005-.01c-.066-.117-.168-.208-.29-.259l-.004-.001c-.181-.08-.392-.127-.614-.127-.005 0-.011 0-.016 0h.001q-.59-.014-1.741-.014-.254 0-.763.02t-.777.034c-.384.004-.749.077-1.086.208l.021-.007c-.276.098-.515.234-.725.404l.005-.004c-.168.147-.36.274-.567.375l-.015.007c-.193.098-.42.156-.661.156-.021 0-.041 0-.062-.001h.003c-.553-.083-1.051-.228-1.518-.429l.04.015c-.537-.212-1.191-.41-1.864-.559l-.091-.017q-.254-.054-.683-.127t-.67-.121-.529-.127c-.17-.043-.32-.109-.454-.198l.006.003c-.098-.065-.175-.153-.226-.257l-.002-.004c-.028-.098-.045-.21-.045-.327 0-.206.051-.4.141-.57l-.003.007c.094-.207.176-.45.235-.703l.005-.027c.001-.019.001-.041.001-.063 0-.168-.02-.331-.057-.487l.003.014q-.067-.32-.134-.569c-.038-.134-.06-.288-.06-.448 0-.014 0-.029.001-.043v.002c0-.006 0-.014 0-.021 0-.133.054-.253.141-.34.197-.119.435-.189.69-.189.026 0 .052.001.077.002h-.004.039c.275 0 .537-.059.773-.165l-.012.005c.221-.122.407-.278.557-.465l.003-.004c.102-.172.163-.379.163-.6 0-.029-.001-.058-.003-.087v.004c.063.136.1.296.1.464 0 .398-.205.747-.516.949l-.004.003c-.244.139-.536.221-.848.221-.093 0-.184-.007-.273-.021l.01.001q-.455-.04-.576.134-.174.201.067.763c.036.096.072.175.113.251l-.005-.011q.08.16.114.24c.025.065.046.142.059.221l.001.007c.011.059.018.127.018.197 0 .034-.002.068-.005.102v-.004c-.034.246-.115.467-.232.664l.004-.008c-.117.18-.187.401-.187.638v.002q.04.228.495.348.268.08 1.132.248t1.333.274q.32.08.991.294t1.105.308c.159.041.342.064.53.064.075 0 .15-.004.223-.011l-.009.001c.336-.027.635-.165.865-.376l-.001.001c.173-.163.287-.386.308-.636v-.004c.001-.025.001-.055.001-.085 0-.249-.037-.489-.107-.716l.005.017c-.07-.267-.157-.499-.264-.718l.01.022q-.134-.261-.268-.489c-.744-1.231-1.491-2.287-2.304-3.287l.041.052q-.91-.991-1.514-.536-.147.121-.201-.201c-.02-.111-.031-.239-.031-.37 0-.049.002-.097.005-.146v.007c.005-.251.054-.49.138-.71l-.005.014c.097-.243.205-.45.329-.645l-.009.015c.106-.16.204-.344.286-.537l.009-.023q.107-.282.355-.964t.395-1.045c.136-.326.27-.595.419-.853l-.019.037c.149-.275.322-.511.524-.721l-.001.001c.657-.75 1.213-1.611 1.635-2.546l.026-.065q-.16-1.5-.214-4.151c-.004-.079-.007-.171-.007-.263 0-.635.12-1.242.339-1.799l-.012.033c.303-.621.797-1.11 1.405-1.398l.018-.008c.37-.18.804-.284 1.263-.284.046 0 .091.001.137.003h-.006c.025 0 .055-.001.085-.001.475 0 .935.066 1.37.19l-.035-.009c.455.117.853.309 1.202.563l-.01-.007c.539.42.958.969 1.216 1.601l.009.026c.252.523.399 1.138.399 1.787 0 .066-.002.132-.005.197v-.009c-.002.076-.004.165-.004.255 0 .932.148 1.83.421 2.672l-.017-.061c.379 1.143.99 2.121 1.781 2.92l-.001-.001c.546.621.995 1.344 1.315 2.133l.018.051c.337.735.614 1.593.788 2.487l.012.073c.048.253.076.544.076.842 0 .102-.003.203-.01.303l.001-.014c-.014.271-.071.524-.166.759l.006-.016q-.121.268-.268.294c-.132.05-.24.139-.313.252l-.002.003q-.181.228-.362.475c-.146.185-.327.336-.533.444l-.009.004c-.215.119-.471.189-.743.189-.026 0-.052-.001-.077-.002h.004c-.153-.007-.297-.031-.435-.07l.013.003c-.119-.034-.221-.097-.301-.181-.062-.064-.121-.131-.177-.202l-.004-.005c-.055-.079-.106-.169-.15-.263l-.005-.011q-.094-.194-.121-.261-.294-.495-.549-.4t-.375.656c-.026.14-.041.3-.041.464 0 .299.049.586.14.854l-.006-.019c.09.402.141.864.141 1.338 0 .451-.046.89-.135 1.315l.007-.042c-.031.12-.048.259-.048.401 0 .352.108.68.292.95l-.004-.006c.203.272.524.445.885.445.032 0 .065-.001.096-.004h-.004c.44-.032.833-.207 1.141-.477l-.002.002c.356-.311.748-.604 1.161-.867l.039-.023c.389-.205.848-.398 1.324-.551l.062-.017c.393-.118.735-.285 1.044-.497l-.013.008q.32-.248.248-.462c-.067-.164-.184-.295-.331-.38l-.004-.002c-.198-.122-.426-.229-.667-.308l-.023-.007c-.305-.109-.544-.34-.661-.633l-.003-.007c-.127-.266-.202-.579-.202-.908 0-.022 0-.044.001-.066v.003c-.002-.021-.003-.045-.003-.07 0-.218.079-.418.211-.572l-.001.001c.006.272.045.532.112.78l-.005-.023c.054.209.12.389.202.561l-.008-.018c.076.146.167.272.275.382.085.093.177.176.276.251l.005.004q.107.074.288.174t.218.125z" />

                                            </g>


                                        </svg>
                                        <p style={{ marginLeft: '65px', color: 'white' }}>Linux</p>
                                    </Item>
                                </Grid>

                                {/* 5th Row */}
                                <Grid xs={4}>
                                    <Item className='technologyItem' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 16 16"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >

                                            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path fill="white" d="M7.983 8.37c-.053.073-.098.133-.141.194L5.775 11.5c-.64.91-1.282 1.82-1.924 2.73a.128.128 0 01-.092.051c-.906-.007-1.813-.017-2.719-.028-.01 0-.02-.003-.04-.006a.455.455 0 01.025-.053 13977.496 13977.496 0 015.446-8.146c.092-.138.188-.273.275-.413a.165.165 0 00.018-.124c-.167-.515-.338-1.03-.508-1.543-.073-.22-.15-.44-.218-.66-.022-.072-.059-.094-.134-.093-.57.002-1.136.001-1.704.001-.108 0-.108 0-.108-.103 0-.674 0-1.347-.002-2.021 0-.075.026-.092.099-.092 1.143.002 2.286.002 3.43 0a.113.113 0 01.076.017.107.107 0 01.045.061 18266.184 18266.184 0 003.92 9.51c.218.53.438 1.059.654 1.59.026.064.053.076.12.056.6-.178 1.2-.352 1.8-.531.075-.023.102-.008.126.064.204.62.412 1.239.62 1.858l.02.073c-.043.015-.083.032-.124.043l-4.085 1.25c-.065.02-.085 0-.106-.054l-1.25-3.048-1.226-2.984-.183-.449c-.01-.026-.023-.048-.043-.087z" />

                                            </g>
                                        </svg>
                                        <p style={{ marginLeft: '35px', color: 'white' }}>AWS Lambda</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="-27 0 310 310"
                                            style={{
                                                height: '70px',
                                                width: '70px',
                                                color: 'white',
                                                paddingTop: '20px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_blackgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <g> <g transform="translate(153.000000, 46.000000)"> <path d="M103,91.042 L40.848,93.617 L0.559,91.047 L67.199,84.66 L103,91.042" fill="grey"> </path> <path d="M67.055,87.45 L103,91.042 L103,18.636 L67.055,0.661 L64.295,3.641 L64.295,84.369 L67.055,87.45" fill="white"> </path> <path d="M0.559,18.594 L67.055,0.597 L67.055,87.45 L0.559,91.047 L0.559,18.594" fill="grey"> </path> </g> <g transform="translate(0.000000, 46.000000)"> <path d="M0,91.042 L62.152,93.617 L102.441,91.047 L35.991,83.93 L0,91.042" fill="grey"> </path> <path d="M35.945,87.45 L0,90.935 L0,18.31 L35.945,0.365 L37.6,3.456 L37.6,84.737 L35.945,87.45" fill="grey"> </path> <path d="M102.441,18.594 L35.945,0.597 L35.945,87.45 L102.441,91.047 L102.441,18.594" fill="white"> </path> </g> <g transform="translate(153.000000, 171.000000)"> <path d="M103,3.486 L40.848,0.91 L0.559,3.481 L66.909,10.188 L103,3.486" fill="white"> </path> <path d="M67.055,7.078 L103,3.486 L103,75.891 L67.055,93.866 L65.167,89.755 L65.167,10.772 L67.055,7.078" fill="white"> </path> <path d="M0.559,75.934 L67.055,93.931 L67.055,7.078 L0.559,3.481 L0.559,75.934" fill="grey"> </path> </g> <g transform="translate(0.000000, 171.000000)"> <path d="M0,3.486 L62.152,0.91 L102.441,3.481 L35.51,10.769 L0,3.486" fill="white"> </path> <path d="M35.945,7.078 L0,3.486 L0,75.891 L35.945,93.866 L38.124,90.626 L38.124,10.769 L35.945,7.078" fill="grey"> </path> <path d="M102.441,75.934 L35.945,93.931 L35.945,7.078 L102.441,3.481 L102.441,75.934" fill="white"> </path> </g> <g transform="translate(55.000000, 0.000000)"> <path d="M40.553,106.629 L73.519,100.848 L139.333,110.167 L145.002,113.428 L113.036,116.926 L40.553,106.629" fill="grey"> </path> <path d="M105.447,106.629 L72.481,100.848 L3.833,111.5 L0.998,113.428 L32.964,116.926 L105.447,106.629" fill="grey"> </path> <path d="M40.553,204.899 L73.519,210.68 L139.167,201.5 L145.002,198.1 L113.036,194.602 L40.553,204.899" fill="white"> </path> <path d="M105.447,204.899 L72.481,210.68 L3.333,200.833 L0.998,198.1 L32.964,194.602 L105.447,204.899" fill="white"> </path> <path d="M145.002,113.428 L145.002,77.641 L111.289,66.616 L111.289,19.776 L73,0.634 L73,0.635 L71.403,3.178 L71.112,305.766 L73,309.657 L111.289,290.515 L111.289,244.912 L145.002,233.887 L145.002,198.1 L111.289,204.035 L111.289,107.493 L145.002,113.428" fill="white"> </path> <path d="M34.711,19.776 L34.711,66.616 L0.998,77.641 L0.998,113.428 L34.711,107.493 L34.711,204.035 L0.998,198.1 L0.998,233.887 L34.711,244.912 L34.711,290.515 L73,309.657 L73,0.634 L34.711,19.776" fill="grey"> </path> </g> </g> </g>
                                        </svg>
                                        <p style={{ marginLeft: '25px', color: 'white' }}>AWS API Gateway</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 32 32"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <title>dotnet</title> <path d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z" /> </g>


                                        </svg>
                                        <p style={{ marginLeft: '70px', color: 'white' }}>.Net</p>
                                    </Item>
                                </Grid>



                            </Grid>
                        </Box>
                        <hr className='hline' />
                    </div>
                    <div className="content usesContent" ref={usesRef}>
                        <h1>Uses</h1>
                        <Box className='boxForProjects' sx={{ width: '650px' }}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                {/* 1st Row of Uses */}
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
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z" /> </g>


                                        </svg>
                                        <p style={{ marginLeft: '55px', color: 'white' }}>VS Code</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '70px',
                                                width: '70px',
                                                color: 'white',
                                                paddingTop: '20px',
                                                marginLeft: '50px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <path d="M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555a3.2 3.2 0 0 0 .833.722c.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z" />

                                            </g>

                                        </svg>
                                        <p style={{ marginLeft: '60px', color: 'white' }}>IntelliJ</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 32 32"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M18.036 0.131c-8.765-1.12-16.781 5.067-17.905 13.833-1.12 8.765 5.067 16.781 13.833 17.905 8.765 1.12 16.781-5.067 17.9-13.833 1.125-8.765-5.061-16.781-13.828-17.905zM21.328 10.115c-0.297 0-0.579 0.12-0.787 0.333l-5.937 5.932-0.411-0.407-0.855-0.859c5.849-5.833 6.907-5.891 7.989-5zM14.849 16.593l5.916-5.921c0.328-0.344 0.875-0.339 1.204 0.005 0.323 0.349 0.291 0.896-0.073 1.197l-6.265 5.5zM15.287 17.521l-1.469 0.317c-0.031 0.005-0.072-0.011-0.088-0.047-0.016-0.032-0.011-0.068 0.016-0.095l0.859-0.859zM11.547 16.907l1.568-1.563 1.172 1.172-2.641 0.567c-0.047 0.011-0.093-0.009-0.115-0.052-0.025-0.041-0.015-0.093 0.016-0.124zM6.688 24.984c-0.057-0.005-0.1-0.057-0.095-0.109 0.005-0.025 0.016-0.047 0.032-0.063h0.005l1.26-1.26 1.631 1.631zM9.921 23.307c-0.124 0.068-0.187 0.209-0.156 0.344l0.271 1.152c0.043 0.167-0.161 0.28-0.281 0.156h-0.005l-1.635-1.636 5.016-5.011 2.427-0.525 1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zM16.959 18.74l-1.12-1.12 6.265-5.5c0.057-0.052 0.109-0.109 0.156-0.167-0.192 1.792-2.703 4.323-5.301 6.787zM21.839 10.125h-0.005c-2.183-2.193 0.901-5.563 3.276-3.584l-2.145 2.152c-0.063 0.061-0.063 0.167 0 0.228l1.661 1.663c-0.932 0.463-2.052 0.276-2.787-0.459zM25.271 10.125c-0.109 0.109-0.229 0.208-0.359 0.291l-1.609-1.609 2.041-2.047c0.885 0.964 0.849 2.443-0.073 3.365zM25.14 8.068c-0.067 0.047-0.093 0.129-0.072 0.208 0.099 0.197 0.072 0.432-0.068 0.599-0.068 0.084-0.052 0.199 0.031 0.265 0.032 0.021 0.068 0.037 0.109 0.037 0.057 0 0.111-0.021 0.141-0.063 0.235-0.281 0.281-0.677 0.12-1.005-0.063-0.083-0.177-0.104-0.261-0.041z" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '55px', color: 'white' }}>Postman</p>
                                    </Item>
                                </Grid>
                                {/* 2nd Row of Uses */}
                                <Grid xs={4}>
                                    <Item className='technologyItem' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 15 15"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z" fill="white" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '60px', color: 'white' }}>Notion</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '70px',
                                                width: '70px',
                                                color: 'white',
                                                paddingTop: '20px',
                                                marginLeft: '50px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier">

                                                <title>OpenAI icon</title>

                                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />

                                            </g>


                                        </svg>
                                        <p style={{ marginLeft: '50px', color: 'white' }}>Chat GPT</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66683 1.25C6.41167 1.25 4.5835 3.07817 4.5835 5.33333C4.5835 6.70965 5.26442 7.92693 6.30776 8.66667C5.26442 9.4064 4.5835 10.6237 4.5835 12C4.5835 13.3763 5.26442 14.5936 6.30777 15.3333C5.26442 16.0731 4.5835 17.2903 4.5835 18.6667C4.5835 20.9218 6.41167 22.75 8.66683 22.75C10.922 22.75 12.7502 20.9218 12.7502 18.6667V15.1624C13.4539 15.738 14.3534 16.0833 15.3335 16.0833C17.5887 16.0833 19.4168 14.2552 19.4168 12C19.4168 10.6237 18.7359 9.4064 17.6926 8.66666C18.7359 7.92693 19.4168 6.70965 19.4168 5.33333C19.4168 3.07817 17.5887 1.25 15.3335 1.25H8.66683ZM11.2502 14.5833H8.66683C7.24009 14.5833 6.0835 13.4267 6.0835 12C6.0835 10.5733 7.24009 9.41666 8.66683 9.41667L11.2502 9.41666L11.2502 12L11.2502 14.5833ZM8.66683 7.91667H11.2502V2.75H8.66683C7.24009 2.75 6.0835 3.9066 6.0835 5.33333C6.0835 6.76007 7.24009 7.91667 8.66683 7.91667ZM17.9168 5.33333C17.9168 6.75914 16.7617 7.91517 15.3363 7.91667L14.0432 7.91666L12.7502 7.91666L12.7502 2.75H15.3335C16.7602 2.75 17.9168 3.9066 17.9168 5.33333ZM12.7502 11.9968C12.7519 10.5726 13.9061 9.41838 15.3303 9.41667L15.336 9.41667C16.7616 9.41801 17.9168 10.5741 17.9168 12C17.9168 13.4267 16.7602 14.5833 15.3335 14.5833C13.9078 14.5833 12.7519 13.4284 12.7502 12.0032V11.9968ZM8.66683 16.0833C7.24009 16.0833 6.0835 17.2399 6.0835 18.6667C6.0835 20.0934 7.24009 21.25 8.66683 21.25C10.0936 21.25 11.2502 20.0934 11.2502 18.6667V16.0833H8.66683Z" fill="white" /> </g>

                                        </svg>
                                        <p style={{ marginLeft: '62px', color: 'white' }}>Figma</p>
                                    </Item>
                                </Grid>

                                {/* 3rd Row of Uses */}
                                <Grid xs={4}>
                                    <Item className='technologyItem' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="-1.5 0 20 20"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <title>apple [white]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[white]"> </path> </g> </g> </g> </g>


                                        </svg>
                                        <p style={{ marginLeft: '50px', color: 'white' }}>iphone 14</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="-1.5 0 20 20"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px'
                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <title>apple [white]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[white]"> </path> </g> </g> </g> </g>


                                        </svg>
                                        <p style={{ marginLeft: '60px', color: 'white' }}>ipad pro</p>
                                    </Item>
                                </Grid>
                                <Grid xs={4}>
                                    <Item className='technologyItem'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 16 16"
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                color: 'white',
                                                paddingTop: '25px',
                                                marginLeft: '55px',


                                            }}
                                            fill="currentColor"
                                        >
                                            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <g fill="white"> <path d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.164-.315c-.416.491-.937.737-1.565.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.192-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.617.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.048-.214c0-.085.042-.133.127-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.101-.208a.365.365 0 01.213-.053h.426c.1 0 .17.016.212.053.043.032.08.107.102.208l.84 3.578.92-3.578a.459.459 0 01.107-.208.347.347 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.768.768 0 01-.038.133l-1.283 4.127c-.031.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.38.38 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.461.461 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.428 2.428 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.435 1.435 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z" /> <path fill-rule="evenodd" d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" clip-rule="evenodd" /> <path fill-rule="evenodd" d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.217-.1.212-.53.686-1.72.462-2.003z" clip-rule="evenodd" /> </g> </g>

                                        </svg>
                                        <p style={{ marginLeft: '35px', color: 'white' }}>AWS Services</p>
                                    </Item>
                                </Grid>

                            </Grid>
                        </Box>
                        <hr className='hline useshline' />

                    </div>
                    <div className="content footerContent">
                        <a href="#" onClick={scrollToMenu} style={{ color: 'white', fontFamily: 'Verdana' }}>
                            <h3>Thanks for Scrolling
                                <svg xmlns="http://www.w3.org/2000/svg" style={{
                                    height: '25px',
                                    width: '25px',
                                    color: 'white',
                                    marginTop: '10px',
                                    marginLeft: '5px',
                                    fontSize: 'bold'


                                }} fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 -7 20 20">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                </svg>

                            </h3>
                        </a>

                        <hr className='hline' />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
