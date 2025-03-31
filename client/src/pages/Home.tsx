import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuthButton from '../components/GoogleAuthButton'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Social Login</h1>
      <p className="mb-4">Sign in using your account.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</Link>
        <GoogleAuthButton />
      </div>
    </div>
  )
}

export default Home
