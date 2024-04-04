import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-2 bg-[#F3F3F3] py-4 px-2">
           <button className="btn-secondary btn">Latest</button> 
           <Marquee className="font-semibold">
           <Link className="mr-3" to="/"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</Link> 
           {/* <Link className="mr-3" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link> 
           <Link to="/"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>  */}
           </Marquee>
        </div>
    );
};

export default BreakingNews;