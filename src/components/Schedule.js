
import React, { useState } from 'react';

const Schedule = () => {
    const [scheduleItems, setScheduleItems] = useState([]);
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAddSchedule = (e) => {
        e.preventDefault();
        if (subject && date && time) {
            const newScheduleItem = { subject, date, time };
            setScheduleItems([...scheduleItems, newScheduleItem]);
            setSubject('');
            setDate('');
            setTime('');
        }
    };

    const handleDeleteSchedule = (index) => {
        const updatedSchedule = scheduleItems.filter((_, i) => i !== index);
        setScheduleItems(updatedSchedule);
    };

    return (
        <div>
            <h2 style={{color:"grey"}}>Schedule</h2>
            <form onSubmit={handleAddSchedule}>
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button type="submit">Add Schedule</button>
            </form>

            <h3 style={{color:"grey"}}>My Schedule</h3>
            <ul>
                {scheduleItems.map((item, index) => (
                    <li key={index}>
                        <strong>{item.subject}</strong> - {item.date} at {item.time}
                        <button onClick={() => handleDeleteSchedule(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;
