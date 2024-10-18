import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            const response = await fetch(`https://api.example.com/courses/${id}`); // Replace with your API
            const data = await response.json();
            setCourse(data);
        };

        fetchCourseDetail();
    }, [id]);

    if (!course) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
           
        </div>
    );
};

export default CourseDetail;
