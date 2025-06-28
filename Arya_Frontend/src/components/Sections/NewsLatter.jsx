import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import showImg from '../../assets/Images/Banner/NewsLatter.webp'
import '../../style/NewsLatter.scss'

function NewsLatter() {
  return (
    <>
      <Container fluid className='News_latter_Container'>
        <Container>
          <Row>
            <Col>
              <div className="News_Latter d-flex items-center justify-between">
                <div className="news_latter_content">
                  <div className="email_container flex items-center">
                    <input type="text" placeholder='Enter Your Email' />
                    <button className='main_button'>Send</button>
                  </div>
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam omnis repudiandae inventore nisi voluptas ipsa. Expedita illum impedit natus amet ratione! Illum, autem cumque. Recusandae nisi ad dolorum accusantium perspiciatis.</p>
                  </div>
                </div>
                <div className="news_latter_img">
                  <img src={showImg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default NewsLatter