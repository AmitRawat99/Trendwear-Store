import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../../style/login.scss'

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username === 'admin' && formData.password === 'admin') {
            navigate('/dashboard');
            localStorage.setItem("userData", JSON.stringify(formData));

        } else {
            setError('Invalid username or password');
        }
    };


    return (
        <Container fluid>
            <div className="form_Container">
                <div className="form_section">
                    <Form onSubmit={handleSubmit} className="w-100 p-4">
                        <h4 className="title-login text-center mb-4">Login Admin</h4>

                        <Row>
                            <Col md={12}>
                                <Form.Group className='label_group mb-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name='username'
                                        type='text'
                                        placeholder='Enter Username'
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className='label_group mb-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name='password'
                                        type='password'
                                        placeholder='Enter Password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {error && <Alert variant="danger" className='danger'>{error}</Alert>}
                            </Col>
                            <Col md={12}>
                                <Button type='submit' variant='primary' className='w-100'>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default LoginForm;
