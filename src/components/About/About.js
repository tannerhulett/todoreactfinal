import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../images/me.jpg'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <article className="bg-purple p-4 mb-5 text-white">
        <h1 className='text-center'>About the Developer</h1>
      </article>
      <Container>
        <Row>
          <Col lg={6} className='mt-5'>
            <img src={image} alt='Tanner Hulett, Web Developer' className='profilePic' />
          </Col>
          <Col lg={6} className='about-text mt-5'>
            <h3>Welcome to my app!</h3>
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
