import { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {
    const [profile, setProfile] = useState(null);
    const accessToken = localStorage.getItem("access");

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/profile/", {
            headers: { Authorization: `Bearer ${accessToken}`},
        })
        .then((res) => setProfile(res.data[0]))
        .catch((err) => console.error(err));
    }, [accessToken]);

    if (!profile) return <p>読み込み中...</p>;

    return (
        <div>
            <h2>プロフィール</h2>
            <p>ユーザー名: {profile.user}</p>
            <p>自己紹介: {profile.bio}</p>
            {profile.avatar && (
                <img src={`http//127.0.0.1:8000${profile.avatar}`} width="150" alt="avatar" /> 
            )}
        </div>
    );
};