import React from 'react'

const Dots = ({count}) => {
    return (
        <div className="dot-container">
            {count.map((dot, idx) => <div key={idx+dot} className="dots"></div>)}
        </div>
    )
}

export default Dots
