import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import News from "./shared/News";
import RightSideNav from "./shared/RightSideNav";



const Home = () => {
    const allNews = useLoaderData()
    
   
    return (
        <div className="">
            <Header/>
            <BreakingNews/>
            <Navbar/>
           
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 w-full">
                <div className="">
                    <LeftSideNav/>
                </div>
                <div className="col-span-2 md:col-span-2 border">
                    {
                       allNews.map(news=> <News key={news._id} news={news}></News>) 
                    }
                    
                </div>
                <div className="border w-full col-span-3 lg:col-span-1">
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;