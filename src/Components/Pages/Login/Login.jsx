import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({
            email: '',
            password: ''
        });

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let formErrors = {};

        // Simple validation
        if (!email) {
            formErrors.email = "Email is required";
        }
        if (!password) {
            formErrors.password = "Password is required";
        }

        // If there are validation errors, set them and return
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            // URL encode form data
            const encodedData = new URLSearchParams();
            encodedData.append('email', email);
            encodedData.append('password', password);

            const res = await axios.post("http://localhost:3000/users/login", encodedData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            // Show alert on successful login
            alert("Login successful!");

            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            window.location.href = '/';
        } catch (err) {
            // Check if the error response data exists
            if (err.response && err.response.data) {
                console.log(err.response.data);
                setErrors(err.response.data);
            } else {
                console.error('An unexpected error occurred.');
            }
        }
    };

    return (
        <motion.div
            className="bg-gray-900 min-h-screen flex items-center justify-center p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-slate-600 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-300 font-semibold mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            className="w-full border border-gray-500 rounded-md px-3 py-2 bg-gray-700 text-gray-100 text-sm"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-300 font-semibold mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            ref={passwordRef}
                            className="w-full border border-gray-500 rounded-md px-3 py-2 bg-gray-700 text-gray-100 text-sm"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-center mt-4 text-gray-300 text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default Login;
