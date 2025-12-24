import React from 'react'

const ThirdCard = () => {
  return (
    <div className='card third-card'>
      <div className="upper">
        <h2>100+</h2>
        <h3>Pro Coaches</h3>
        <p>Certified professionals ready to boost your game from first serve to tournament level.</p>
      </div>
      <div className="lower">
        {/* <div className="beginner">
            <p>Beginner</p>
            <div className='dot-container'>
              {[1,1,1,1,1,1,1,1,1,1].map((dot)=><div key={dot} className="dots"></div>)}
            </div>
            <p>55</p>
          </div>
          <div className="beginner">
            <p>Intermediate</p>
                        {[1,1,1,1,1].map((dot)=><div key={dot} className="dots"></div>)}

            <p>55</p>
          </div>
          <div className="beginner">
            <p>Beginner</p>
            <div className="dots"></div>
            <p>55</p>
          </div> */}

        <div className="content">
          <p>Beginner</p>
          <p>Intermediate</p>
          <p>Advanced</p>
        </div>
        <div className='content'>
          <div className="dot-container">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((dot) => <div key={dot} className="dots"></div>)}
          </div>
          <div className="dot-container">
            {[1, 1, 1, 1, 1].map((dot) => <div key={dot} className="dots"></div>)}
          </div>
          <div className="dot-container">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((dot) => <div key={dot} className="dots"></div>)}
          </div>
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
