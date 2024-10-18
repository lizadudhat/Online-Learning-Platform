import React from 'react';
import '../App.css'; 

const Lecture = () => {
    const lectures = [
        {
            title: 'React Basics',
            duration: '1 hour',
            timing: 'Monday, 10:00 AM - 11:00 AM',
            description: 'Learn the fundamentals of React, including components, props, and state management.',
            videoUrl: 'https://youtu.be/SqcY0GlETPk',
        },
        {
            title: 'JavaScript Advanced',
            duration: '1.5 hours',
            timing: 'Wednesday, 2:00 PM - 3:30 PM',
            description: 'Dive deep into advanced JavaScript concepts, including closures, promises, and async programming.',
            videoUrl: 'https://youtu.be/R9I85RhI7Cg?t=4',
        },
       
    ];

    return (
        <div className="lecture-container"style={{borderRadius:"50px 30px"}}>
            <h2 className="lecture-title"style={{color:"grey"}}>Lectures</h2>

            {lectures.map((lecture, index) => (
                <div key={index} className="lecture-card">
                    <h3 className="lecture-card-title"style={{color:"#e5cec8"}}>{lecture.title}</h3>
                    <p className="lecture-card-duration">Duration: {lecture.duration}</p>
                    <p className="lecture-card-timing">Timing: {lecture.timing}</p>
                    <p className="lecture-card-description">{lecture.description}</p>
                    <a href={lecture.videoUrl} target="_blank" rel="noopener noreferrer">
                        <button className="watch-button"style={{backgroundColor:"#e5cec8"}}>Watch Now</button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Lecture;
