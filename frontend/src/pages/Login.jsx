import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login({setRole}) {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const res = await API.post("/auth/login", form);

        const role = res.data.user.role;

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", role);

        setRole(role);   // ⭐ updates navbar instantly

        alert("Login successful");

        if (role === "ADMIN" || role === "OWNER") {
            navigate("/admin-dashboard");
        } else {
            navigate("/user-home");
        }

    } catch (err) {
        console.log(err);
    }
};

    return (

        <div className="login-page">

            <div className="login-card">

                <h2>Login</h2>

                <form className="login-form" onSubmit={handleSubmit}>

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />

                    <button className="login-btn">Login</button>

                </form>

            </div>

        </div>

    )

}

export default Login;