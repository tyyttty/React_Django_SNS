import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {User} from "./types/user"

interface ProfileProps {
    profile: User;
  }


export const Timeline: React.FC = () => {
    const [posts, setPosts] = useState<User[]>([]);
    const accessToken = localStorage.getItem("access");

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/posts/", {
            headers: { 
                Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((res) => setPosts(res.data))
        .catch((err) => console.error(err));
    }, [accessToken]);

    return (
        <div>
            <h2>タイムライン</h2>
            {posts.map((p) => (
                <div key={p.id}>
                    <p><strong>{p.username}</strong></p>
                    <p>{p.content}</p>
                    {p.image && <img src={`http://127.0.0.1:8000${p.image}`} width="200" alt="post" />}
                    <hr />
                    </div>
            ))}
        </div>
    );
};