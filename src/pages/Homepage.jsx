import React from "react";
import { useState } from "react";
const Homepage = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    return (
        <>
        <div className="flex flex-row justify-center bg-gray-100 p-4 gap-3.5">
            <input type="text" placeholder="Add a new task" className="border p-2" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className="bg-blue-500 text-white p-2 border-2" onClick={() => {
                if (task.trim() === "")
                    return;
                setTaskList([...taskList, task]);
                setTask("");
            }}>Add Task</button>
        </div>
        <div>
            <ul className="list-disc p-4 px-20">
                {taskList.map((t, index) => (
                    <li key={index}>{t} <button className="bg-red-700 text-amber-50 p-1" onClick={() => {
                        setTaskList(taskList.filter((_, i) => i !== index))
                    }} >Delete</button></li>
                ))}
            </ul>
        </div>
        </>
    );
}
export default Homepage;