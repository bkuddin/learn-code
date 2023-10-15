import { Link } from "react-router-dom";
import CountdownTimer from "../../CountdownTimer/CountdownTimer";

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center px-20 h-[100vh] home-banner bg-fixed bg-center bg-cover">
      <div className="absolute top-0 right-0 left-0 bottom-0 z-[2] bg-gradient-to-r from-red-700/80  to-[#C70039]/90"></div>
       
       {/* Overflow */}

       <div className="grid grid-cols-1 md:grid-cols-2 items-center  z-[2] text-white">
          <div className="space-y-3">
              <p className="text-yellow-400">LIMITED TIME OFFER - 96% OFF!</p>
              <h1 className="text-7xl font-semibold">Master in Web Development</h1>
              <p>The ultimate resource that teaches everything you need to know about Web development. </p>
          </div>
          <div className=" bg-[#fffefe00] p-10 text-center space-y-8 glass rounded-2xl">
              <h2 className="text-2xl font-semibold">LIMITED TIME OFFER - 96% OFF!</h2>
              <p className="text-4xl font-bold text-yellow-400"><CountdownTimer countdownTimestampMs={1698733800000}/></p>
              <h3>25 Courses Bundle</h3>
              <p className="text-3xl font-semibold text-yellow-400 text-4xl"><span className="line-through text-3xl ">$578</span>- $59</p>
              <Link to='/register'><button className="px-16 py-4 mt-8 text-[#330066] bg-[#fffefe00] text-2xl font-bold glass hover:rounded-2xl">Sign UP</button></Link>
          </div>
       </div>


    </div>
  );
};

export default HomeBanner;
