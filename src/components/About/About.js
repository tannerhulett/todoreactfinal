import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../images/me.jpg'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <article className="bg-dark p-4 mb-5 text-white">
        <h1 className='text-center'>About the Developer</h1>
      </article>
      <Container>
        <Row>
          <Col lg={4} className='mt-5'>
            <img src={image} alt='Tanner Hulett, Web Developer' className='profilePic' />
          </Col>
          <Col lg={6} className='about-text mt-5'>
            <h3>Welcome to my app!</h3>
            <p>
              Hello, My name is Tanner Hulett. I'm currently in the process of learning the in's and out's of coding to further push my coding career in the right direction.
              
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
