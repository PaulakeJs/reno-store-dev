import React from 'react'

function loader() {
  return (
    <div className='fixed inset-0 bg-black z-10 flex items-center justify-center opacity-50'>
      <div
      className='w-10 h-10 border-1 border-dotted border-green-400 border-t-transparent rounded-full animate-spin'
      ></div>
    </div>
  )
}

export default loader