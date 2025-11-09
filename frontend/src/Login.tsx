import { useState } from "react";
import axios from "axios";
import React from "react";

export const Login = ( { setAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/token/", {
                username,
                password,
            });
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            setAuth(true);
        } catch (err) {
            setError("ログインに失敗しました");
        }
    };

    return (
        <div>
            <h2>ログイン</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ユーザー名"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワード"
                />
                <button type="submit">ログイン</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};