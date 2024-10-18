import React, { useState } from 'react';
import '../App.css'; 

const Homework = () => {
    
    const predefinedHomework = {
        Math: [
            { title: 'Algebra Homework', dueDate: '2024-10-20', isCompleted: false },
            { title: 'Geometry Assignment', dueDate: '2024-10-22', isCompleted: false },
        ],
        Science: [
            { title: 'Physics Experiment Report', dueDate: '2024-10-21', isCompleted: false },
            { title: 'Biology Lab Work', dueDate: '2024-10-25', isCompleted: false },
        ],
        English: [
            { title: 'Essay on Shakespeare', dueDate: '2024-10-18', isCompleted: false },
            { title: 'Grammar Worksheet', dueDate: '2024-10-24', isCompleted: false },
        ],
        History: [
            { title: 'World War II Project', dueDate: '2024-10-30', isCompleted: false },
            { title: 'Ancient Civilizations Review', dueDate: '2024-10-28', isCompleted: false },
        ],
        Geography: [
            { title: 'Map Skills Worksheet', dueDate: '2024-10-26', isCompleted: false },
            { title: 'Climate Change Report', dueDate: '2024-10-29', isCompleted: false },
        ],
    };

    
    const [selectedSubject, setSelectedSubject] = useState('');

    return (
        <div className="homework-container">
            <h2 className="homework-title"style={{color:"grey"}}>Homework</h2>

            <select 
                className="subject-select"
                onChange={(e) => setSelectedSubject(e.target.value)} 
                value={selectedSubject}
            >
                <option value="">Select a Subject</option>
                {Object.keys(predefinedHomework).map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>

            {selectedSubject && (
                <div className="homework-list">
                    <h3 className="subject-heading">{selectedSubject} Homework</h3>
                    <ul>
                        {predefinedHomework[selectedSubject].map((item, index) => (
                            <li key={index} className="homework-item" style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
                                <strong>{item.title}</strong> - Due: <span className="due-date">{item.dueDate}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Homework;
