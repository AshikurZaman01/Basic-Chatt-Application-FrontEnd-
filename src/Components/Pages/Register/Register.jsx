import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Notification from "../Notification/Notification"; // Adjust the path if necessary

const Register = () => {

    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const imageRef = useRef();

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    });

    const [notification, setNotification] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const image = imageRef.current.files[0]; // Image file

        let formErrors = {};

        if (!name) formErrors.name = "Name is required";
        if (!email) formErrors.email = "Email is required";
        if (!password) formErrors.password = "Password is required";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);

        if (image) formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:3000/users/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setNotification({ message: "User registered successfully!", type: "success" });
            nameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';
            imageRef.current.value = ''; // Clear the file input

            navigate('/');

            setErrors({
                name: '',
                email: '',
                password: '',
                image: ''
            });

        } catch (error) {
            console.error(error.response?.data || error.message);
            setNotification({ message: "Error registering user", type: "error" });
        }
    };

    return (
        <div>
            <motion.div
                className="bg-gray-900 min-h-screen flex items-center justify-center p-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-slate-600 p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-white">Register</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-300 font-semibold mb-1 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                ref={nameRef}
                                className="w-full border border-gray-500 rounded-md px-3 py-2 bg-gray-700 text-gray-100 text-sm"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
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
                        <div>
                            <label className="block text-gray-300 font-semibold mb-1 text-sm">Upload Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                ref={imageRef}
                                className="w-full border border-gray-500 rounded-md px-3 py-2 bg-gray-700 text-gray-100 text-sm"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-4 text-gray-300 text-sm">
                        Already have an account? <Link to="/" className="text-blue-400 hover:underline">Login</Link>
                    </p>
                </div>
            </motion.div>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
};

export default Register;
