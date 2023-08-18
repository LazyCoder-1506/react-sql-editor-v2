import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-light flex justify-center items-center">
        <div className='text-center'>
          <p className="text-5xl font-medium mb-20 text-center">
            A single stop solution for all your
            <br />
            <br />
            <span className="text-primary">SQL Queries</span>
          </p>
          <Link to="/editor">
            <button className="btn-outline border-2 bg-white text-2xl px-6">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage