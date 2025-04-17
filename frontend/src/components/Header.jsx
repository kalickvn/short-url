// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Container, Button, Form, Card, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Nav';
import Advantage from './Advantage';
const Header = () => {
  // const token = localStorage.getItem("token");
  // const email = localStorage.getItem("email");
  // const navigate = useNavigate();
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // }
  const [link, setLink] = useState('');
  const [short, setShort] = useState('');
  const API_URL = import.meta.env.VITE_API_URL;
  const handleShorten = async () => {
    const res = await axios.post(`${API_URL}/short-links`, {
      originalUrl: link
    });
    setShort(res.data.shortUrl);
  }; 

  return (
    
      <>
      <Navigation />
      
      <Container className="mt-4 text-center">
        <h2>More than just shorter links</h2>
        <p>Build your brand’s recognition and get insights on your links.</p>
        <Button variant="info">Get Started</Button>

        <Card className="p-3 mt-4">
          <Form.Control
            placeholder="Shorten a link here..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <Button className="mt-2" onClick={handleShorten}>Shorten It!</Button>
          {short && (
            <p className="mt-3">Short URL: <a href={short}>{short}</a></p>
          )}
        </Card>
        {short && <Alert variant="success">{short}</Alert>}
        
        <Advantage />
        

        <div className="bg-dark text-white text-center py-5 mt-5">
          <h3>Boost your links today</h3>
          <Button variant="info" className="mt-3">Get Started</Button>
        </div>

        <footer className="bg-black text-white py-4">
          <Container>
            <Row>
              <Col md={3}><h5>Shortly</h5></Col>
              <Col md={3}>
                <h6>Features</h6>
                <ul className="list-unstyled">
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>Resources</h6>
                <ul className="list-unstyled">
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>Company</h6>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </Container>
    </>
  );
};

export default Header;