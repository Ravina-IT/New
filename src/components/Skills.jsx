import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/Skills.css';

function Skills() {
  return (
    <section id='skills'>
      <h1 className='skills-heading'>SKILLS</h1>
      <div className='skills-container'>
        <Container fluid='md'>
          {/* First Row */}
          <Row className="justify-content-center">
            <SkillCol imageSrc="/assets/skills_icon/c.png" altText="C" />
            <SkillCol imageSrc="/assets/skills_icon/java.png" altText="Java" />
            <SkillCol imageSrc="/assets/skills_icon/html.png" altText="HTML" />
            <SkillCol imageSrc="/assets/skills_icon/css.png" altText="CSS" />
            <SkillCol imageSrc="/assets/skills_icon/js.png" altText="JavaScript" />
          </Row>
          <br />
          {/* Second Row */}
          <Row className="justify-content-center">
            <SkillCol imageSrc="/assets/skills_icon/reactjs.png" altText="React" />
            <SkillCol imageSrc="/assets/skills_icon/nodejs.png" altText="Node.js" />
            <SkillCol imageSrc="/assets/skills_icon/mysql.png" altText="MySQL" />
            <SkillCol imageSrc="/assets/skills_icon/mongodb.png" altText="MongoDB" />
          </Row>
          <br />
          {/* Third Row */}
          <Row className="justify-content-center">
            <SkillCol imageSrc="/assets/skills_icon/figma.png" altText="Figma" />
            <SkillCol imageSrc="/assets/skills_icon/adalo.png" altText="Adalo" />
            <SkillCol imageSrc="/assets/skills_icon/git.png" altText="Git" />
          </Row>
        </Container>
      </div>
    </section>
  );
}

const SkillCol = ({ imageSrc, altText }) => (
  <Col xs={6} sm={6} md={4} lg={2} className="skill-col d-flex flex-column align-items-center">
    <div className='img-container'>
      <img src={process.env.PUBLIC_URL + imageSrc} alt={altText} />
    </div>
    <div className='text-container'>
      <p className='skill-para'>{altText}</p>
    </div>
  </Col>
);

export default Skills;
