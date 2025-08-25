
import React, { useState, useEffect } from "react";

const Homepage = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem("taskList");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-blue-100 py-8">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Your Tasks</h2>
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow transition"
                        onClick={() => {
                            if (task.trim() === "") return;
                            setTaskList([...taskList, task]);
                            setTask("");
                        }}
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-3">
                    {taskList.length === 0 ? (
                        <li className="text-gray-400 text-center">No tasks yet. Add your first task!</li>
                    ) : (
                        taskList.map((t, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-2 shadow-sm animate-fade-in"
                            >
                                <span className="text-gray-800 font-medium">{t}</span>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                                    onClick={() => {
                                        setTaskList(taskList.filter((_, i) => i !== index));
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </main>
    );
};

export default Homepage;