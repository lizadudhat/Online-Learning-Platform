import React from 'react';

const LessonPlayer = ({ lesson }) => {
    return (
        <div className="container">
            <h2>{lesson.title}</h2>
            <div>
               
                <video src={lesson.videoUrl} controls></video>
                <p>{lesson.content}</p>
            </div>
        </div>
    );
};

export default LessonPlayer;
