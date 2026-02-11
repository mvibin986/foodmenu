import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ulog.css"
import API from "../api/axios";


export default function UserLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/uproduct"); 
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignup = () => {
    navigate("/usign");
  };

  return (
    <div className="uslog">
      <div className="box">
        <h2>User Login</h2>

        <form onSubmit={login}>
          <div className="form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
          </div>

          <div className="form">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {msg && <p className="error-msg">{msg}</p>}

        <p>
          Don't have an account?
          <button className="sibt" onClick={handleSignup}>
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}
