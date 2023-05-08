import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleAuth () {
    await login()

    return navigate('/')
  }

  return (
    <section className="login">
      <article className="bg-dark mb-5 p-5 text-white">
        <h1 className="text-center">Welcome to ReactJS ToDo!</h1>
      </article>
      <Container>
        <Card className='m-2 border-dark text-center'>
          <Card.Header className='bg-dark text-white'>
            <h2>Login for full functionality</h2>
          </Card.Header>
          <Card.Body>
            <button className='btn btn-success' onClick={() => handleAuth()}>
              Login w/ Github
            </button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
