import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div className="flex  ">
            {/* Flex-basis of 1/3 for left and 2/3 for right sidebar */}
            <div className="w-1/3">
                <LeftSideBar />
            </div>
            <div className="w-2/3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;
