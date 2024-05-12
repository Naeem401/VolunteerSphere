import axios from "axios";
import Carousel from "../components/Carousel";
import VolunteerNeedsNowSection from "../components/VolunteerNeedsNowSection";
import { useEffect, useState } from "react";
import VolunteerNeedsCard from "../components/VolunteerNeedsCard";
import VolunteerSpotlight from "../components/VolunteerSpotlight";


const Home = () => {
    const [needVolunteer, setNeedVolunteer] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/home`)
        setNeedVolunteer(data)
    }
    return (
        <div>
            <Carousel />
            <VolunteerNeedsNowSection />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { 
                needVolunteer.map(v => <VolunteerNeedsCard key={v._id} needVolunteerData={v}/>)
                }
            </div>
            <VolunteerSpotlight/>
        </div>
    );
};

export default Home;