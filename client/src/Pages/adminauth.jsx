import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminauth.css";

function AdminAuth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // 🔐 Frontend validation
    if (
      (isRegistering && (!formData.name || !formData.email || !formData.password)) ||
      (!isRegistering && (!formData.email || !formData.password))
    ) {
      toast.warn("⚠️ Please fill all fields", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
      return;
    }

    const url = isRegistering
      ? "http://localhost:5000/api/admin/register"
      : "http://localhost:5000/api/admin/login";

    try {
      const response = await axios.post(url, formData);

      // 🎉 Success toast
      toast.success(`🟢 ${response.data.message}`, {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });

      if (!isRegistering) {
        // 🗝️ Save token in localStorage
        localStorage.setItem("adminToken", response.data.token);

        // ✅ Navigate to homepage
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        // 🔄 Clear form after successful registration
        setFormData({ name: "", email: "", password: "" });
        setIsRegistering(false);
      }
    } catch (err) {
      // 🔴 Error toast
      toast.error(`❌ ${err.response?.data?.message || "Something went wrong"}`, {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
    }
  };

  return (
    <div className="admin-auth-container">
      <div className="admin-auth-card">
        <h2>{isRegistering ? "Admin Register" : "Admin Login"}</h2>

        {isRegistering && (
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button onClick={handleSubmit}>
          {isRegistering ? "Register" : "Login"}
        </button>

        <p
          onClick={() => setIsRegistering(!isRegistering)}
          style={{ cursor: "pointer", marginTop: "10px" }}
        >
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AdminAuth;
