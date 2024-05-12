
import banner from '../assets/img/banner.jpg'
import { useEffect, useState } from "react";
import AllVolunteerNeedsCard from "../components/AllVolunteerNeedsCard";
import axios from "axios";


const NeedVolunteer = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/');
        setPosts(response.data);
    }


    const handleSearch = async () => {
        const response = await axios.get(`http://localhost:5000/?title=${searchTerm}`);
        setPosts(response.data);
    };

    return (
        <div className='container mx-auto'>
            <img className='py-6' src={banner} alt="" />
            <div >
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Volunteer Opportunities</h1>
                <p className="text-lg text-gray-600 text-center mb-8">
                    Explore volunteer opportunities and make a difference in your community.
                </p>
                {/* Search input field */}
                <div className="mt-4 mb-6 flex justify-end">
        <input
          type="text"
          placeholder="Search by Post Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-l-md focus:outline-none"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-r-md">
          Search
        </button>
      </div>


                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <AllVolunteerNeedsCard key={post._id} data={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteer;