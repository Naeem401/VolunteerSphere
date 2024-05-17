import axios from "axios";
import Carousel from "../components/Carousel";
import VolunteerNeedsNowSection from "../components/VolunteerNeedsNowSection";
import { useEffect, useState } from "react";
import VolunteerNeedsCard from "../components/VolunteerNeedsCard";
import VolunteerSpotlight from "../components/VolunteerSpotlight";
import { Link } from "react-router-dom";


const Home = () => {
    const [needVolunteer, setNeedVolunteer] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get('https://volunteer-sphere-backend-eight.vercel.app/posts');
        const limitedData = response.data.slice(0, 6);
        setNeedVolunteer(limitedData);
    }
    
    return (
        <div className="bg-gray-100">
            <Carousel />
            
            <VolunteerNeedsNowSection />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { 
                needVolunteer.map(v => <VolunteerNeedsCard key={v._id} needVolunteerData={v}/>)
                }
                
            </div>
            <Link to='/need-volunteer' className="flex justify-center mt-5"><button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out">See All</button></Link>
            <VolunteerSpotlight/>
        </div>
    );
};

export default Home;