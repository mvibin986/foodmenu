
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import '../css/alog.css'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/admin/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/products");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  function handlesignup(){
    navigate("/signup")
  }

  return (
  <div className="admin-login-page">
  <div className="cont">
    <h2>Admin Login</h2>

    <form onSubmit={login}>
      <div className="form-group">
        <label>Email</label>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <button>Login</button>
    </form>

    <p>
      Don't have an account?
      <button className="small-btn" onClick={handlesignup}>Signup</button>
    </p>
  </div>
</div>


);

}