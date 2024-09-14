import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
    return (

        <div>
            <Login></Login>
            {/* <div className="flex">
            <div className="w-1/3">
                <LeftSideBar />
            </div>
            <div className="w-2/3">
                <RightSideBar />
            </div>
        </div> */}
        </div>

    );
};

export default Home;
