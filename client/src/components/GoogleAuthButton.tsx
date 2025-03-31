import React from 'react'

const GoogleAuthButton: React.FC = () => {
  const handleGoogleAuth = () => {
    window.location.href = 'http://localhost:8080/auth'
  }

  return (
    <button
      onClick={handleGoogleAuth}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  )
}

export default GoogleAuthButton
