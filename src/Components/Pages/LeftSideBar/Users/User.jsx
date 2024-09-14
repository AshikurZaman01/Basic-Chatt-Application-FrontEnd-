import React from 'react';

const User = ({ user }) => {



    return (
        <div className='flex items-center gap-4 hover:bg-orange-800 p-3 rounded-lg transition-colors duration-200 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 h-12 rounded-full border-2 border-orange-500 overflow-hidden">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold">User</h2>
                <p className="text-sm text-gray-300">Online</p>
            </div>
        </div>
    );
}

export default User;
