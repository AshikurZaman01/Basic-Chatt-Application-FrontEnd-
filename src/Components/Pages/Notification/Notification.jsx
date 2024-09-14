import { motion } from "framer-motion";

const Notification = ({ message, type, onClose }) => {
    const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <motion.div
            className={`fixed top-4 right-4 p-4 rounded-lg text-white ${backgroundColor}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-center">
                <p>{message}</p>
                <button onClick={onClose} className="ml-4 text-xl">&times;</button>
            </div>
        </motion.div>
    );
};

export default Notification;
