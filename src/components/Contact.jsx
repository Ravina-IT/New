import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';
import '../stylesheets/Contact.css';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setAlert({
        show: true,
        message: 'Please fill in all fields.',
        variant: 'danger'
      });
      return;
    }

    emailjs.send(
      'service_rajyjec', // service ID
      'template_hlya9hy', // template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject,
        user_message: formData.message,
      },
      'OZoD6ksHr2vqD19Xy' // user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setAlert({
        show: true,
        message: 'Email sent successfully!',
        variant: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }).catch((error) => {
      console.error('FAILED...', error);
      setAlert({
        show: true,
        message: 'Something went wrong. Please try again.',
        variant: 'danger'
      });
    });
  };

  return (
    <section id='contact'>
      <h1 className='contact-heading'>CONTACT</h1>
      <Container className='contact-container'>
        <Col className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Row sm={12}>
              <Col sm={6} className="align-items-end justify-content-end">
                {alert.show && (
                  <Alert
                    variant={alert.variant}
                    onClose={() => setAlert({ show: false, message: '', variant: '' })}
                    dismissible
                  >
                    {alert.message}
                  </Alert>
                )}
                <Row>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <div className='form-input'>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <div className='form-input'>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <div className='form-input'>
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={!!errors.subject}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Row>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-6" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <div className='form-input-textarea'>
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </div>
                  <br />
                  <div className='form-btn'>
                    <Button type="submit">Submit</Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Container>
      <Footer className='footer'></Footer>
    </section>
  );
}

export default Contact;
