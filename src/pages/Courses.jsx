import React from 'react'
import './courses.css'

const Courses = () => {
return (
    <>
        <div className="flex_1">
            <h1>Courses</h1>
        </div>
        
    <div className="flex">
        <div className="left">
            <div className="head">
                <h3>College Algebra</h3>
                <a href="">See all(14)</a>
            </div>
        </div>

        <div className="right">
            <button>Edit Courses</button>
            <div className="drop">
            </div>
        </div>
    </div>
        
    </>
)
}

export default Courses
