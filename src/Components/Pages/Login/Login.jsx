import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Notification from "../Notification/Notification"; // Ensure correct path

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [notification, setNotification] = useState(null);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ email: '', password: '' });

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let formErrors = {};
        if (!email) formErrors.email = "Email is required";
        if (!password) formErrors.password = "Password is required";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post("http://localhost:3000/users/login", { email, password });

            setNotification({ message: "Login successful!", type: "success" });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/home');
        } catch (err) {
            console.error('An unexpected error occurred.', err);
            setErrors(err.response?.data || { general: 'An unexpected error occurred.' });
            setNotification({ message: "Login failed. Please try again.", type: "error" });
        } finally {
            setLoading(false);
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
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4zm12 0a6 6 0 00-6-6v2a8 8 0 018 8h-2z"></path>
                                    </svg>
                                    Loading...
                                </span>
                            ) : (
                                'Login'
                            )}
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

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
        </motion.div>
    );
};

export default Login;
