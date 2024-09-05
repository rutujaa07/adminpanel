import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.status === 200) {
        login();
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Form className='loginpage' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </Form.Group>
      
      {error && <p className="error">{error}</p>}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;
