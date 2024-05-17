
import axios from "axios";
import { useEffect, useState } from "react";
const VolunteerSpotlight = () => {
  
  const [volunteers, setVolunteers ]= useState([])
  useEffect(() => {
    getData()
}, [])
const getData = async () => {
  const { data } = await axios(`https://volunteer-sphere-backend-eight.vercel.app/dummyVolunteers`)
  setVolunteers(data)
}


  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Volunteer Spotlight</h2>
        <p className="text-center mb-6 text-lg text-gray-600">
          Meet some of our dedicated volunteers making a difference!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={volunteer.photoUrl}
                alt={volunteer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4">{volunteer.story}</p>
                <p className="text-gray-800 font-semibold">- {volunteer.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSpotlight;
