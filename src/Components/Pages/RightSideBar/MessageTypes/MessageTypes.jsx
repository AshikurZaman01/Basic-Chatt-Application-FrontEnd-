import React, { useState } from 'react';

const MessageTypes = () => {
    const [messageContent, setMessageContent] = useState('');

    const handleSendMessage = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Handle message sending logic here
            console.log({
                type: 'text',
                content: messageContent,
            });
            // Clear input after sending
            setMessageContent('');
        }
    };

    return (
        <div className="p-y-4 border border-gray-300 rounded-lg bg-gray-200 shadow-md flex items-center">
            <input
                type="text"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                onKeyDown={handleSendMessage}
                placeholder="Type your message..."
                className="flex-grow p-2 bg-gray-800 text-white border border-gray-600 rounded-l-lg focus:outline-none shadow-sm"
            />
            <button
                onClick={() => {
                    // Handle send button click
                    console.log({
                        type: 'text',
                        content: messageContent,
                    });
                    setMessageContent('');
                }}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
            >
                Send
            </button>
        </div>
    );
};

export default MessageTypes;
