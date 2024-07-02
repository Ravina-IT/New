import React from 'react';
import Image from 'react-bootstrap/Image';
import '../stylesheets/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
    const openResume = () => {
        window.open(process.env.PUBLIC_URL + "/assets/resume/Ravina Resume.pdf", "_blank");
    };

    return (
        <section id='home'>
            <Container className='home-container'>
                <Row className="align-items-center text-center text-md-start">
                    <Col xs={12} md={6} className='text-col p-4 p-md-5'>
                        <h1 className='display-4 display-md-3 fw-bold'>Hi, It's <span className='text-highlight'>RAVINA</span></h1>
                        <h2 className='display-6 display-md-5'>I am a <span className='text-highlight'>Web Developer</span></h2>
                        <div className='resume-btn mt-3 mt-md-4'>
                        <a href="https://github.com/Ravina-IT" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/ravina-c-985b75275" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <Button as="input" type="submit" value="View Resume" onClick={openResume} className='btn-custom' />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='image-col d-flex justify-content-center align-items-center p-4'>
                        <Image className='profile-img img-fluid' src={process.env.PUBLIC_URL + "/assets/profile/bus.jpeg"} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
