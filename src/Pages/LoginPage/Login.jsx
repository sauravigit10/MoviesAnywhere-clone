import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const validate = () => {
    let newErrors = {};

    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Login successful!");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="LoginDiv">
        <form className="LoginContent" onSubmit={handleSubmit}>
          <div className="LoginContent2">

            <div className="div1">
              <h4 className="LoginHeading">Welcome Back!</h4>
              <h3 className="LoginSubheading">Sign in using</h3>
            </div>

         
            <div className="div1">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.email}
                </p>
              )}
            </div>

         
            <div className="div1">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div className="remeber">
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                <span style={{ color: "black" }}>Remember me</span>
              </div>

              <a className="llink" href="/signup">
                Reset Password
              </a>
            </div>

            <button className="LoginButton" type="submit">
              Continue
            </button>

            <hr style={{ border: "1px solid grey", width: "95%" }} />

            <button className="LoginButton" type="button">
              Continue with Google
            </button>
            <button className="LoginButton" type="button">
              Continue with Apple
            </button>

            <div>
              <span style={{ color: "black" }}>
                New Here?{" "}
                <a
                  style={{ color: "#00a0eb", textDecoration: "none" }}
                  href="/signup"
                >
                  Sign Up
                </a>
              </span>
            </div>

          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;