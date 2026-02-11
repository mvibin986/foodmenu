import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import "../css/usig.css";

export default function UserSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/user/signup", form);
      setMsg("Signup successful");
      navigate("/uproduct"); 
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  const handleLogin = () => {
    navigate("/ulog"); 
  };

  return (
    <div className="usig">
      <div className="box1">
        <h2>User Signup</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button type="submit">Signup</button>
        </form>

        <p>
          Already have an account?
          <button className="logbt" onClick={handleLogin}>
            Login
          </button>
        </p>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
}
