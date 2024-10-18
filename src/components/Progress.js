import React from 'react';
import '../App.css'; 
import styled from '@emotion/styled/base';

const Progress = () => {
    
    const courses = [
        {
            title: 'React Basics',
            progress: 80, 
            totalLessons: 10,
            completedLessons: 8,
        
        },
        {
            title: 'JavaScript Advanced',
            progress: 50,
            totalLessons: 12,
            completedLessons: 6,
        },
        {
            title: 'CSS Flexbox and Grid',
            progress: 30,
            totalLessons: 10,
            completedLessons: 3,
        },
        {
            title: 'HTML & CSS Fundamentals',
            progress: 100,
            totalLessons: 8,
            completedLessons: 8,
        },
    ];

    return (
        <div className="progress-container"style={{borderRadius:"30px 50px"}}>
            <h2 className="progress-title"style={{color:"#e5cec8"}}>Course Progress</h2>

            {courses.map((course, index) => (
                <div key={index} className="course-card">
                    <h3 className="course-title"style={{color:"#e5cec8"}}>{course.title}</h3>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                    <p className="progress-info">
                        {course.completedLessons} of {course.totalLessons} lessons completed ({course.progress}%)
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Progress;
