import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
    return (

        <div>
            <div className="flex">
                <div className="w-1/3">
                    <LeftSideBar />
                </div>
                <div className="w-2/3">
                    <RightSideBar />
                </div>
            </div>
        </div>

    );
};

export default Home;
