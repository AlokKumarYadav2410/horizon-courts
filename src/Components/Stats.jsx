import React from 'react'

const Stats = ({title, desc}) => {
  return (
    <div className='stats'>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Stats
