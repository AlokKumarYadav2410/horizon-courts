import React from 'react'
import Dots from './Dots'

const ThirdCard = () => {
  return (
    <div className='card third-card'>
      <div className="upper">
        <h2>100+</h2>
        <h3>Pro Coaches</h3>
        <p>Certified professionals ready to boost your game from first serve to tournament level.</p>
      </div>
      <div className="lower">
        <div className="content">
          <p>Beginner</p>
          <p>Intermediate</p>
          <p>Advanced</p>
        </div>
        <div className='content'>
          <Dots count = {[1,2,3,4,5,6,7,8,9,10]} />
          <Dots count = {[1,2,3,4,5,6,7,8]} />
          <Dots count = {[1,2,3,4,5,6,7]} />
        </div>
        <div className="content">
          <p>55</p>
          <p>40</p>
          <p>35</p>
        </div>
      </div>
    </div>
  )
}

export default ThirdCard
