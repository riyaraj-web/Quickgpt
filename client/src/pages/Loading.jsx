import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.25 // 100% in 8 seconds (100/1.25 = 80 * 100ms = 8000ms)
      })
    }, 100)

    // Navigation timeout
    const timeout = setTimeout(() => {
      navigate('/')
    }, 8000)

    return () => {
      clearTimeout(timeout)
      clearInterval(progressInterval)
    }
  }, [navigate])

  return (
    <div className='bg-gradient-to-b from-[#531B81] to-[#29184B] backdrop-opacity-60 flex flex-col items-center justify-center h-screen w-screen text-white'>
      
      {/* Logo/Brand */}
      <div className='mb-8'>
        <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4'>
          <div className='w-8 h-8 bg-white rounded-lg'></div>
        </div>
        <h1 className='text-3xl font-bold text-center'>QuickGPT</h1>
        <p className='text-white/70 text-center mt-2'>Loading your AI assistant...</p>
      </div>

      {/* Spinner */}
      <div className='relative mb-6'>
        <div className='w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin'></div>
      </div>

      {/* Progress Bar */}
      <div className='w-64 h-1 bg-white/20 rounded-full overflow-hidden'>
        <div 
          className='h-full bg-white rounded-full transition-all duration-100 ease-out'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress Text */}
      <p className='text-white/60 text-sm mt-3'>{Math.round(progress)}%</p>
    </div>
  )
}

export default Loading