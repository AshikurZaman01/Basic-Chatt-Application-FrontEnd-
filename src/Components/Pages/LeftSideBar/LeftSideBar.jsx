import Logout from "./Logout/Logout";
import Search from "./SearchBar/Search";
import Users from "./Users/Users";

const LeftSideBar = () => {
    return (
        <div className="w-full h-screen bg-orange-900 text-white flex flex-col shadow-lg">
            <div className="p-4">
                <h1 className="text-3xl font-bold tracking-wide">Chat</h1>
            </div>

            <div className="px-4">
                <Search />
            </div>

            <hr className="my-5 border-gray-500" />

            <div className="flex-grow px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md">
                <Users />
            </div>

            <div>
                <Logout></Logout>
            </div>

        </div>
    );
};

export default LeftSideBar;
