import React from 'react'
import Logout from './Auth/Logout'
import { useAuth } from '../contexts/AuthContext'

export default function Footer() {
    const { currentUser } = useAuth()

  return (
    <div className='footerContainer'>
        {currentUser &&
            <Logout />
        }
        <footer className="text-center text-white bg-dark p-4">
            <strong>&copy; {new Date().getFullYear()} Tanner Hulett. All Rights Reserved.</strong>
        </footer>
    </div>
  )
}
