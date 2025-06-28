import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style/dashboard.scss'


function SideBarLayuot() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <SideBar />
                    </Col>
                    <Col lg={9} className='py-3'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SideBarLayuot