import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "./shared/RightSideNav";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import BreakingNews from "./BreakingNews";

const NewsDetails = () => {
    
    const allNews = useLoaderData()
   const {id} = useParams()
   const singleNews = allNews.find(news=> news._id === id);
  
  

    return (
        <div>

      <Header/>
      <BreakingNews/>
      <Navbar/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           <div className="md:col-span-2">
             <h3 className="text-xl font-bold mb-4">Dragon news</h3>

             <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 ">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={singleNews.image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{singleNews.title}</h3>
			</a>
			<p className="leading-snug text-[#706F6F]">{singleNews.details}</p>
		</div>
	</div>

<Link to="/">
<button className="btn  btn-secondary flex items-center my-4">&larr; All News in this category</button>
</Link>
   
</div>
<h3 className="text-xl font-bold mb-4">Editors Insight</h3>
<div className="grid grid-cols-3 gap-4">

<div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
			
		</div>
		
	</div>
</div>
<div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
			
		</div>
		
	</div>
</div>
<div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
			
		</div>
		
	</div>
</div>

</div>


           </div>
        
<div>
    <RightSideNav/>
</div>
</div>
</div>
    );
};

export default NewsDetails;