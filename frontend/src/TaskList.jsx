import React, { useState } from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks, setTasks }) {
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const addTask = () => {
        if (newTitle.trim() === "" || newContent.trim() === "") return;
        const newTask = {
            id: Date.now(),
            title: newTitle,
            content: newContent,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
        setNewTitle("");
        setNewContent("");
    };

    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map((task) => 
              task.id === id ? { ...task, isCompleted: !task.idCompleted } : task
        )
    );
};

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
};


return (
    <div className="app-container">
        <h1 className="app-title">TODO 管理アプリ</h1>

        <div className="task-input-container">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="タイトルを入力"
              className="task-input"
              />
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="内容を入力"
                className="task-input"
                />
                <button onClick={addTask} className="add-button">
                    追加
                </button>
        </div>

        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <input 
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="task-checkbox"
                      />

                      <Link to={`/task/${task.id}`} className="task-link">
                      {task.title}
                      </Link>
                      <button
                        className="delete-button"
                        onClick={() => deleteTask(task.id)}
                        >削除
                        </button>
                </li>
            ))}
        </ul>
    </div>
);
}

export default TaskList;