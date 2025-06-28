import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { FaDollarSign, FaShoppingCart, FaClipboardList, FaUsers } from 'react-icons/fa';
import Dashboard from '../components/sideBar/SideBar';
import '../style/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboards() {
    return (
        <Container fluid>
            <Row className="dashboard-row">
                <Col lg={12}>
                    <h4 className="mb-4">Dashboard Overview</h4>
                    <Row className="g-3">
                        <Col sm={12} md={6} lg={4}>
                            <Card className="dashboard-card card-sales">
                                <div className="card-icon">
                                    <FaDollarSign />
                                </div>
                                <div className="card-info">
                                    <h6>Total Sales</h6>
                                    <p>$25,000</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="dashboard-card card-orders">
                                <div className="card-icon">
                                    <FaShoppingCart />
                                </div>
                                <div className="card-info">
                                    <h6>Total Orders</h6>
                                    <p>320 Orders</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="dashboard-card card-purchases">
                                <div className="card-icon">
                                    <FaClipboardList />
                                </div>
                                <div className="card-info">
                                    <h6>Total Purchases</h6>
                                    <p>180 Purchases</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="dashboard-card card-customers">
                                <div className="card-icon">
                                    <FaUsers />
                                </div>
                                <div className="card-info">
                                    <h6>Total Customers</h6>
                                    <p>150 Customers</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboards;
