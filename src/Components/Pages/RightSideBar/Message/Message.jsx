import React from 'react';

const messages = [
    { id: 1, type: 'start', text: "You were the Chosen One!", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 2, type: 'end', text: "I hate you!", timestamp: "Seen at 12:46", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 3, type: 'start', text: "I thought I could bring balance to the Force.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 4, type: 'end', text: "You were supposed to bring balance, not leave it in darkness!", timestamp: "Seen at 12:50", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 5, type: 'start', text: "I know there is good in you.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 6, type: 'end', text: "You should have listened.", timestamp: "Seen at 12:55", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 7, type: 'start', text: "I tried to warn you.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 8, type: 'end', text: "It’s too late now.", timestamp: "Seen at 01:00", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 9, type: 'start', text: "There is still hope.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 10, type: 'end', text: "Hope is a lie.", timestamp: "Seen at 01:05", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 11, type: 'start', text: "Your anger blinds you.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 12, type: 'end', text: "I am beyond your help.", timestamp: "Seen at 01:10", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 13, type: 'start', text: "The Force will guide us.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 14, type: 'end', text: "Your guidance is flawed.", timestamp: "Seen at 01:15", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 15, type: 'start', text: "There is always a way.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 16, type: 'end', text: "The way is blocked.", timestamp: "Seen at 01:20", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 17, type: 'start', text: "We must find another path.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 18, type: 'end', text: "There is no other path.", timestamp: "Seen at 01:25", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 19, type: 'start', text: "Even in darkness, there is light.", timestamp: "Delivered", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 20, type: 'end', text: "That light is fading.", timestamp: "Seen at 01:30", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
];

const Message = () => {
    return (
        <div className="flex flex-col-reverse h-[480px] border border-gray-300 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
                {messages.map(({ id, type, text, timestamp, avatar }) => (
                    <div key={id} className={`chat chat-${type}`}>
                        <div className="chat-image avatar">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    alt={type === 'start' ? "Obi-Wan Kenobi" : "Anakin"}
                                    src={avatar}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className={`chat-bubble ${type === 'start' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}`}>{text}</div>
                        <div className="chat-footer text-gray-500">{timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;
