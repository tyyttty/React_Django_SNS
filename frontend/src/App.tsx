import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";
import { Timeline } from "./Timeline";
import { Profile } from "./Profile";
import React from "react";

export const App = () => {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("access") // すでにトークンがあるならログイン済みにする
  );

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuth(false);
  };

  if (!isAuth) {
    return <Login setAuth={setIsAuth} />;
  }

  return (
    <Router>
      <nav>
        <Link to="/timeline">タイムライン</Link> | {" "}
        <Link to="/profile">プロフィール</Link> | {" "}
        <button onClick={handleLogout}>ログアウト</button>
      </nav>

      <Routes>
        <Route path="/timeline" element={<Timeline />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
