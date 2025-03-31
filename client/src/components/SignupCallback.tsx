import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../services/api'

const SignupCallback: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [message, setMessage] = useState('Processing...')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const code = params.get('code')
    if (code) {
      // GETではなくPOSTで送る場合、クエリパラメータを付与する方法
      api.post(`/signup?code=${code}`)
        .then(response => {
          setMessage('Signup successful!')
          navigate('/dashboard')
        })
        .catch(error => {
          console.error('Signup error:', error)
          setMessage('Signup failed.')
        })
    } else {
      setMessage('No code provided.')
    }
  }, [location.search, navigate])

  return (
    <div className="text-center">
      <p>{message}</p>
    </div>
  )
}

export default SignupCallback
