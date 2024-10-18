import React, { useState } from 'react';
import '../App.css'; 

const Dashboard = () => {
    
    const [userStats] = useState({
        completedCourses: 5,
        enrolledCourses: 10,
        totalHoursWatched: 25,
    });

    const [activities] = useState([
        { id: 1, message: 'Completed the course: React Basics', date: '2024-10-18' },
        { id: 2, message: 'Started the course: JavaScript Advanced', date: '2024-10-15' },
        { id: 3, message: 'Watched: CSS for Beginners', date: '2024-10-14' },
    ]);

    const [upcomingTasks] = useState([
        { id: 1, title: 'Finish project for JavaScript Advanced', dueDate: '2024-10-20' },
        { id: 2, title: 'Watch the next lecture on React Hooks', dueDate: '2024-10-21' },
    ]);

    // New courses data
    const [newCourses] = useState([
        { id: 1, title: 'Web Development Bootcamp', description: 'Learn full-stack web development from scratch.', duration: '3 months' },
        { id: 2, title: 'Data Science with Python', description: 'Dive into data analysis and machine learning.', duration: '2 months' },
        { id: 3, title: 'Digital Marketing Masterclass', description: 'Understand the ins and outs of digital marketing.', duration: '1.5 months' },
    ]);

   
    const handleEnroll = (courseTitle) => {
        alert(`Enrolled in ${courseTitle}`);
    };

    return (
        <div className="dashboard-container"style={{borderRadius:"50px 50px"}}>
            <h2 className="dashboard-title"style={{color:"grey"}}>Dashboard</h2>

            <div className="user-stats">
                <div className="stat-card"style={{backgroundColor:"#e5cec8"}}>
                    <h3 style={{color:"white"}}>{userStats.enrolledCourses}</h3>
                    <p style={{color:"white"}}>Enrolled Courses</p>
                </div>
                <div className="stat-card"style={{backgroundColor:"#e5cec8"}}>
                    <h3 style={{color:"white"}}>{userStats.completedCourses}</h3>
                    <p style={{color:"white"}}>Completed Courses</p>
                </div>
                <div className="stat-card"style={{backgroundColor:"#e5cec8"}}>
                    <h3 style={{color:"white"}}>{userStats.totalHoursWatched}</h3>
                    <p style={{color:"white"}}>Total Hours Watched</p>
                </div>
            </div>

            <div className="activities-section">
                <h3 style={{color:"#e5cec8"}}>Recent Activities</h3>
                <ul>
                    {activities.map((activity) => (
                        <li key={activity.id} className="activity-item">
                            <p>{activity.message}</p>
                            <small>{activity.date}</small>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="upcoming-tasks">
                <h3 style={{color:"#e5cec8"}}>Upcoming Tasks</h3>
                <ul>
                    {upcomingTasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <strong>{task.title}</strong> - Due: {task.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="new-courses-section">
                <h3 style={{color:"#e5cec8"}}>New Courses</h3>
                <ul >
                    {newCourses.map((course) => (
                        <li key={course.id} className="course-item">
                            <h4 style={{color:"#e5cec8"}}>{course.title}</h4>
                            <p>{course.description}</p>
                            <p>Duration: {course.duration}</p>
                            <button style={{backgroundColor:"#e5cec8"}} className="enroll-button" onClick={() => handleEnroll(course.title)}>Enroll Now</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
