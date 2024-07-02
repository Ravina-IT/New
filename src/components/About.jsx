import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/About.css';

function AboutMe() {
  const [want, setwant] = useState('happy');
  const [language, setLanguage] = useState('java');
  const [output, setOutput] = useState('');

  const handlewantChange = (event) => {
    setwant(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = () => {
    setOutput(want === 'code' ? '💻' : '☕');
  };

  const renderCode = () => {
    if (language === 'c') {
      return (
        <code>
          <span className="keyword">#include</span> &lt;<span className="header">stdio.h</span>&gt;<br />
          <span className="keyword">int</span> main() {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">char</span> want[] = <span className="string">"<select value={want} onChange={handlewantChange} className="dropdown">
            <option value="code">Code</option>
            <option value="coffee">Coffee</option>
          </select>"</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (strcmp(want, <span className="string">"happy"</span>) == 0) {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"%s\\n"</span>, <span className="string">"💻"</span>);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"} <span className="keyword">else</span> {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"%s\\n"</span>, <span className="string">"☕"</span>);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="number">0</span>;<br />
          {"}"}
        </code>
      );
    } else if (language === 'java') {
      return (
        <code>
          <span className="keyword">public</span> class <span className="class-name">SurpriseGame</span> {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">public static void</span> <span className="method-name">main</span>(<span className="keyword">String</span>[] args) {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">String</span> want = <span className="string">"<select value={want} onChange={handlewantChange} className="dropdown">
            <option value="code">Code</option>
            <option value="coffee">Coffee</option>
          </select>"</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (want.equals(<span className="string">"Code"</span>)) {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"💻"</span>);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <span className="keyword">else</span> {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"☕"</span>);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
          {"}"}
        </code>
      );
    }
  };

  return (
    <section id='about'>
      <Container className='about-container'>
        <Row>
          <Col md={6}>
            <section className="code-container">
              <div className="toolbar">
                <label>Language: </label>
                <select value={language} onChange={handleLanguageChange} className="language-dropdown">
                  <option value="java">Java</option>
                  <option value="c">C</option>
                </select>
              </div>
              
              <div className="code-editor">
                <div className="line-numbers">
                  {Array.from({ length: 13 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <pre className="code-content">
                  {renderCode()}
                </pre>
              </div>
              <button onClick={handleSubmit} className="submit-button">Submit</button>
              {output !== '' && <div className="output">Output: {output}</div>}
            </section>
          </Col>
          <Col md={6}>
            <h1 className='about-heading'>ABOUT ME</h1>
            <p className='about-para'>
              I'm a dedicated web developer passionate about crafting <span className="highlight">visually striking</span> and highly functional websites. 
              <br></br><br></br>With a strong emphasis on <span className="highlight">creativity</span> and <span className="highlight">precision</span>, I specialize in transforming innovative ideas into compelling digital experiences. 
              <br></br><br></br>My approach combines technical expertise with a keen eye for detail, ensuring each project achieves <span className="highlight">excellence</span>. 
              <br></br><br></br>I thrive in collaborative environments, leveraging <span className="highlight">leadership skills</span> to inspire teams and deliver outstanding results. Let's create something exceptional together.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
