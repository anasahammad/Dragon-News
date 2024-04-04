import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import News from "./shared/News";
import RightSideNav from "./shared/RightSideNav";


const Home = () => {
    return (
        <div className="">
            <Header/>
            <BreakingNews/>
            <Navbar/>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                <div className="border">
                    <LeftSideNav/>
                </div>
                <div className="md:col-span-2 border">
                    <News/>
                </div>
                <div className="border">
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;