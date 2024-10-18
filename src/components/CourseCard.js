import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-primary">View Course</Link>
            </div>
        </div>
    );
};

export default CourseCard;
