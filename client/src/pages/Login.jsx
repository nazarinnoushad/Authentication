import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { auth, setAuth } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/auth/login", { email, password })
      if (data.success) {
        toast.success(data.message)
        setAuth({
          ...auth,
          user: data.user,
          token: data.token
        })
        localStorage.setItem("auth", JSON.stringify(data))
        navigate("/")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Login failed. Please try again.")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Helmet>
        <title>Login</title>
      </Helmet>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-md w-full p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-400">Liza</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-white">
          Don't have an account? <a href="#" className="text-pink-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login

