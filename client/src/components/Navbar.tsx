import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

const Navbar: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await api.post('/logout')
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Social Login</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-800">Sign Up</Link>
          <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
