import React from 'react'

const Service = () => {
    return (
        <div className='service-section'>
            <div className="left-card">
                <div className="upper-part">
                    <p className="service">Services
                    </p>
                    <div className="service-content">
                        <p>Explore our full range of coaching, training and tennis experiences. From first serve to match point - we've got the right program for you.</p>
                    </div>
                </div>
                <div className="lower-part">
                    <div className="btn">Explore More <i class="ri-arrow-right-up-long-line"></i></div>
                </div>
            </div>
            <div className="middle-card">
                <p className='text-filter'>Training Programs</p>
                <div className='middle-bottom'>
                    <p>Program Designed for all ages and abilities.</p>
                    <i class="ri-arrow-right-up-long-line"></i>
                </div>
            </div>
            <div className="right-card">
                <div className="img-card">
                    <p className="text-filter">Court Access</p>
                    <p>Hourly Court Rental</p>
                </div>
                <div className="middle-content">
                    Step into a space built for players - to grow, compete and thrive.
                </div>
                <div className="lower-content">
                    <i class="ri-arrow-left-long-line"></i>
                    <i class="ri-arrow-right-long-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Service
