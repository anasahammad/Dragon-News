import moment from "moment";
import { useEffect, useState } from "react";
import { CiBookmark, CiShare2  } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const News = () => {
const [newses, setNewses] = useState([])
useEffect(()=>{
    fetch("/news.json")
    .then(res=> res.json())
    .then(data =>{
        setNewses(data)
    })
}, [])

    return (
        <div className="w-full">
            {
                newses.map(news=> <div key={news._id}  className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
                    <div className="flex space-x-4 ">
                        
                    <img alt="" src={news.author.img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    
    <div className="flex flex-col space-y-1">
        
        <a rel="noopener noreferrer" href="#" className=" font-semibold">{news.author.name ?news.author.name : "Anas Ahammad"}</a>
        <span className="text-[14px] text-[#706F6F]">{moment().format("YYYY -MM-DD")}</span>
    </div>
                    </div>
                    
                    <div>
                        <p className="flex gap-2 items-center ">
                            <CiBookmark className="h-[24px] w-[24px]"/>
                            <CiShare2 className="h-[24px] w-[24px]"/>
                        </p>
                    </div>
                </div>
                <div>
                <h2 className="text-xl text-[#403F3F] font-bold hover:underline mb-5">{news.title}</h2>
                    <img src={news.thumbnail_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                   
                    <p className=" text-[#706F6F]">{news.details.split(" ").slice(0, 40).join(" ")}</p>
                    <p className="text-orange-500 font-bold">Read More</p>

                </div>
                <div className="flex flex-wrap items-center justify-between ">
                    <div className="flex items-center">
                    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  
</div>
<div className="ml-3 text-[#706F6F] font-medium">{news.rating.number}</div>
                    </div>
               

                    <div className="flex space-x-2 text-sm dark:text-gray-600">
                        
                     <p className="flex items-center gap-3 text-[#706F6F]"><FaEye/>
                     {news.total_view ? news.total_view : "No views"}
                     </p>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default News;