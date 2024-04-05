import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import photo1 from "../../assets/1.png"
import photo2 from "../../assets/2.png"
import photo3 from "../../assets/3.png"
import { CiCalendar } from "react-icons/ci";
import moment from "moment";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    return (
        <div className="flex-col">
            <div className="p-6 lg:p-2">
                <h2 className="text-2xl">All Caterogy</h2>
                <div className="">

                
                <div className="text-left">
                {
                    categories.map(category => <NavLink className="block px-10 py-2 lg:py-4 hover:bg-gray-300 lg:text-xl text-[#9F9F9F] hover:text-black hover:font-bold" key={category.id} to={`/category/&{category.id}`}>{category.name}</NavLink>)
                }
                </div>

                <div className="grid  gap-3 lg:grid-cols-1  py-6  ">
                <div className="card rounded-[5px] card-compact  bg-base-100 shadow-xl">
  <figure><img src={photo1} alt="Shoes" /></figure>
  <div className="py-5 px-2">
    <h2 className="text-left font-bold text-[12px] lg:text-xl text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <p className="text-[#403F3F] font-bold">Sports</p>
        <p className="flex flex-col lg:flex-row items-center gap-2 text-[#9F9F9F]"><CiCalendar/> {moment().format("MMM D, YYYY")}</p>
    </div>
   
  </div>
</div>
                <div className="card rounded-[5px] card-compact  bg-base-100 shadow-xl">
  <figure><img src={photo2} alt="Shoes" /></figure>
  <div className="py-5 px-2">
    <h2 className="text-left font-bold text-[12px] lg:text-xl text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <p className="text-[#403F3F] font-bold">Sports</p>
        <p className="flex flex-col lg:flex-row items-center gap-2 text-[#9F9F9F]"><CiCalendar/> {moment().format("MMM D, YYYY")}</p>
    </div>
   
  </div>
</div>
                <div className="card rounded-[5px] card-compact  bg-base-100 shadow-xl">
  <figure><img src={photo3} alt="Shoes" /></figure>
  <div className="py-5 px-2">
    <h2 className="text-left font-bold text-[12px] lg:text-xl text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex flex-col lg:flex-ro items-center gap-4 mt-4">
        <p className="text-[#403F3F] font-bold">Sports</p>
        <p className="flex  flex-col lg:flex-roitems-center gap-2 text-[#9F9F9F]"><CiCalendar/> {moment().format("MMM D, YYYY")}</p>
    </div>
   
  </div>
</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;