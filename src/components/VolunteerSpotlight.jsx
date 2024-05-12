
import axios from "axios";
import { useEffect, useState } from "react";
const VolunteerSpotlight = () => {
  
  const [volunteers, setVolunteers ]= useState([])
  useEffect(() => {
    getData()
}, [])

const getData = async () => {
    const { data } = await axios(`http://localhost:5000/dummyVolunteers`)
    setVolunteers(data)
}

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Volunteer Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={volunteer.photoUrl} alt={volunteer.name} className=" mb-4" />
              <p className="text-gray-700 mb-4">{volunteer.story}</p>
              <p className="text-gray-800 font-semibold">- {volunteer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSpotlight;
