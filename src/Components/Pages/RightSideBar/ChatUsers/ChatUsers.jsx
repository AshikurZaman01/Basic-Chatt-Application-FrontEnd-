import React, { useContext } from 'react';
import { AuthContext } from '../../../../contecxAPI/AuthProvider';

const ChatUsers = () => {

    const { user, isOnline } = useContext(AuthContext);


    return (
        <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md">
            <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className={`absolute bottom-0 right-0 block w-6 h-6 rounded-full ring-2 ring-white ${isOnline ? `bg-green-500` : `bg-red-500`}`}></span>
            </div>
            <div>
                <p className="text-lg font-semibold">{user?.userName}</p> {/* Access userName safely */}
                <p className="text-sm text-gray-500">{isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    );
}

export default ChatUsers;
