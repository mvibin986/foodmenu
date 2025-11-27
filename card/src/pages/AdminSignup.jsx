import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import '../css/asig.css'

export default function AdminSignup() {
const [form, setForm] = useState({ name: "", email: "", password: "" });
const [msg, setMsg] = useState("");
const [passkey, setPasskey] = useState(""); 

const navigate = useNavigate();

const FRONTEND_PASSKEY = "007"; 

const handleSubmit = async (e) => {
e.preventDefault();

if (passkey !== FRONTEND_PASSKEY) {
  setMsg("Invalid passkey");
  return;
}

try {
  await API.post("/admin/signup", form);
  setMsg("Signup successful");
  navigate("/products");
} catch (err) {
  setMsg(err.response?.data?.message || "Error");
}

};

function handlelogin(){
navigate("/")
}

return ( <div className="admin-signup-page"> <div className="conta"> <h2>Admin Signup</h2>

```
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Passkey"
        onChange={(e) => setPasskey(e.target.value)}
      />
      <button>Signup</button>
    </form>

    <p>
      Already have an account?
      <button className="small-btn" onClick={handlelogin}>Login</button>
    </p>

    <p>{msg}</p>
  </div>
</div>


);
}
