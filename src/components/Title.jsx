import React from 'react'

const Title = (props) => {
  return (
    <div>
      <p className='text-2xl md:text-4xl font-semibold leading-tight'>{props.title}</p>
    </div>
  )
}

export default Title
