import React from "react";
import { useParams, Link } from "react-router-dom";

function TaskDetail({ tasks }) {
    const { id } = useParams();
    const task = tasks.find((t) => t.id === Number(id));

    if (!task) {
        return (
            <div>
                <h2>タスクが見つかりません</h2>
                <Link to="/">戻る</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
            <Link to="/">←戻る</Link>
        </div>
    );
}

export default TaskDetail;