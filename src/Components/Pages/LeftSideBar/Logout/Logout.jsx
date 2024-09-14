import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi'; // Icon for the logout button

const Logout = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        // Add your logout logic here
        console.log("User clicked logout");
    };

    return (
        <div className="px-5 pb-3">
            <motion.button
                onClick={handleToggle}
                initial={{ width: '50px' }}
                animate={{ width: isExpanded ? '150px' : '50px' }}
                className="bg-white/30 backdrop-blur-md text-white border border-white flex items-center justify-center gap-2 p-2 rounded-lg transition-all duration-300 overflow-hidden"
            >
                <FiLogOut className="h-5 w-5" />
                {isExpanded && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Logout
                    </motion.span>
                )}
            </motion.button>
        </div>
    );
}

export default Logout;
