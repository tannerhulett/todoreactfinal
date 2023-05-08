import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    <Navbar expand='lg' variant='dark' bg='dark' className='p-1'> 
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='fs-4'>
                <Link to='/todos' className='nav-link'>To Dos</Link>
                <Link to='/categories' className='nav-link'>Categories</Link>
                <Link to='/about' className='nav-link'>About</Link>
                {!currentUser &&
                  <Link to='/login' className='nav-link'>Login</Link>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
