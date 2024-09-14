import ChatUsers from "./ChatUsers/ChatUsers";
import Message from "./Message/Message";
import MessageTypes from "./MessageTypes/MessageTypes";

const RightSideBar = () => {
    return (
        <div className="w-full h-screen bg-slate-800 text-white flex flex-col">
            
            <div className="flex-grow overflow-auto">
                <ChatUsers />
            </div>

            <div className="flex-grow overflow-auto">
                <Message />
            </div>

            <div className="flex-shrink-0">
                <MessageTypes />
            </div>
            
        </div>
    );
};

export default RightSideBar;
