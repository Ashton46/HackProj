import React, {useState, useEffect} from "react";
import SidebarComponent from "./components/Sidebar";
import Modal from 'react-modal';
import './to-do.css';


const TODO = () => {

    const courses = ["Course 1", "Course 2","Course 3"]
    const sortedTasks = []
    
    const [tasks, setTasks] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(courses[0]);
    const [assignment, setAssignment] = useState("");
    const [progress, setProgress] = useState("0");
    const [priority, setPriority] = useState("Low");
    const [dueDate, setDueDate] = useState("");


    const priorityColors = {
        Low: "#1c41c7",
        Medium: "#ffc926",
        High: "#c7331c"
    };

    const addTask = () => {
        if (assignment.trim() && dueDate) {
            const newTask = {
                course: selectedCourse,
                assignment: assignment.trim(),
                progress: progress,
                priority: priority,
                dueDate: new Date(dueDate).getTime(), // Store as timestamp
                completed: false
            };
            console.log(newTask);
            setTasks([...tasks, newTask]);
            setAssignment("");
            setProgress("");
            setPriority("Low");
            setDueDate("");

            sortedTasks.push(newTask);
            console.log(sortedTasks);
        }
    };
    // Calculate remaining time
    const calculateRemainingTime = (dueDate) => {
        const now = Date.now();
        const distance = dueDate - now;
        if (distance < 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { hours, minutes, seconds };
    };

    const [countdowns, setCountdowns] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const newCountdowns = {};
            tasks.forEach((task, index) => {
                const { hours, minutes, seconds } = calculateRemainingTime(task.dueDate);
                newCountdowns[index] = { hours, minutes, seconds };
            });
            setCountdowns(newCountdowns);
        }, 1000);

        return () => clearInterval(interval);
    }, [tasks]);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div style={{ display: "flex" }}>
            <SidebarComponent />
            <div style={{ flex: 1, padding: "40px" }}>
                <h1 className = "Title" >To-Do List</h1> 
                <button type="button">Sort</button>
        <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
        </Modal>
                <div id="top">
                    <label>Course:</label>
                    <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                        {courses.map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>

                    <label>Assignment:</label>
                    <input
                        type="text"
                        value={assignment}
                        onChange={(e) => setAssignment(e.target.value)}
                    />
                    <br />
                    <label>Progress:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="range"
                            id="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={(e) => setProgress(e.target.value)}
                            style={{
                                appearance: 'none',
                                width: '100px',
                                background: `linear-gradient(to right, #ffc926 ${progress}%, #1c41c7 ${progress}%)`
                            }}
                        />
                        <span className="value" style={{ marginLeft: '10px' }}>
                            {progress}%
                        </span>
                    </div>    

                    <label>Priority:</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <label>Due Date:</label>
                    <input
                        type="datetime-local"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                    <button onClick={addTask}>Add Task</button>
                </div>

            <div style={{ marginBottom: '0px' }}>
             </div> 
                <h2>Tasks</h2>
                <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: "2px" }}>
                        <div id="bottom">
                            <strong>{task.assignment}</strong> - <span style={{ backgroundColor: '#ffffff', padding: '2px 5px', borderRadius: '3px' }}>{task.course}</span>
                            <div>
                                <span style={{ backgroundColor: '#ffffff', padding: '2px 5px', borderRadius: '3px' }}>Time Left:</span> {countdowns[index] ? 
                                    `${countdowns[index].hours}h ${countdowns[index].minutes}m ${countdowns[index].seconds}s` : 
                                    "Calculating..."}
                        </div>
                        <div>
                            <span style={{ backgroundColor: '#ffffff', padding: '2px 5px', borderRadius: '3px' }}>Progress:</span> {task.progress}%
                        </div>
                        <div>
                            <span style={{ backgroundColor: '#ffffff', padding: '2px 5px', borderRadius: '3px' }}>Priority:</span> {task.priority}
                             </div>
                         </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};    

export default TODO;