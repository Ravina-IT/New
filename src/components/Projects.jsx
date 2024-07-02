import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GrTechnology } from "react-icons/gr";
import '../stylesheets/Projects.css';

function Projects() {

  const handleViewClick = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <section id='projects'>
      <h1 className='projects-heading'>PROJECTS</h1>
      <Container className='projects-container'>
        <Row className="justify-content-center align-items-center">
          <Col sm={4} className='img-col'>
            <Card.Img className='img' variant="top" src={process.env.PUBLIC_URL + "/assets/projects/epoch.png"} alt='Epoch' />
          </Col>
          <Col sm={8} className='description-col'>
            <Card.Body>
              <Card.Title>EPOCH</Card.Title>
              <Card.Text>A National-level Inter-college Technical Symposium website</Card.Text>
              <Card.Subtitle><GrTechnology />&nbsp;&nbsp; HTML, CSS, Bootstrap, JS</Card.Subtitle><br />
              <Card.Subtitle>Implemented a Minecraft-themed website for an engaging and immersive user experience.</Card.Subtitle><br />
              <Button variant="primary" onClick={() => handleViewClick('https://epoch.kongu.edu')}>View</Button>
            </Card.Body>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center align-items-center">
          <Col sm={4} className='img-col'>
            <Card.Img className='img' variant="top" src={process.env.PUBLIC_URL + "/assets/projects/tailornova.png"} alt='Tailornova' />
          </Col>
          <Col sm={8} className='description-col'>
            <Card.Body>
              <Card.Title>TAILORNOVA</Card.Title>
              <Card.Text>A Fashion Designing website</Card.Text>
              <Card.Subtitle><GrTechnology />&nbsp;&nbsp; HTML, CSS, Bootstrap, JS, NodeJS, MongoDB</Card.Subtitle><br />
              <Card.Subtitle>Modeled after prominent fashion websites, created a website to master CRUD operations.</Card.Subtitle><br />
              <Button variant="primary" onClick={() => handleViewClick('https://github.com/Ravina-IT/WT-lab3')}>View</Button>
            </Card.Body>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center align-items-center">
          <Col sm={4} className='img-col'>
            <Card.Img className='img' variant="top" src={process.env.PUBLIC_URL + "/assets/projects/sharefun.png"} alt='Share Fun' />
          </Col>
          <Col sm={8} className='description-col'>
            <Card.Body>
              <Card.Title>SHARE FUN</Card.Title>
              <Card.Text>A Blogging website</Card.Text>
              <Card.Subtitle><GrTechnology />&nbsp;&nbsp; ReactJS, ExpressJS, NodeJS, MongoDB</Card.Subtitle><br />
              <Card.Subtitle>Crafted a single-page blogging site with intuitive features including posting, liking, commenting, and request acceptance, prioritizing user interaction and ease of use.</Card.Subtitle><br />
              <Button variant="primary" onClick={() => handleViewClick('https://mernstack-socialmedia.netlify.app/login')}>View</Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
