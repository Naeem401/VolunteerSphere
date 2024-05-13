import { Link, useLoaderData } from "react-router-dom";


const VolunteerNeedDetails = () => {
    const data = useLoaderData()
    const {thumbnail, title, category, location, volunteersNeeded, deadline, organizer, description, _id} = data || {}
  
    return (
        <div className="flex gap-6 justify-center items-center min-h-[calc(100vh-30px)] bg-gray-100">
            {/* Left side - Thumbnail */}
            <div className="flex-1 p-4 border-r">
                <img src={thumbnail} alt="Volunteer Thumbnail" className="h-[450px] w-full rounded-lg shadow-md " />
            </div>

            {/* Right side - Details */}
            <div className="flex flex-col justify-start flex-1">
                {/* Title */}
                <h2 className="text-center font-bold text-3xl text-blue-800 mb-4">{title}</h2>

                {/* Details */}
                <div className="mb-4">
                    <p className="text-gray-700">
                        <span className="font-semibold">Category:</span> {category}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Location:</span> {location}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Deadline:</span> {deadline}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Volunteers Needed:</span> {volunteersNeeded}
                    </p>
                </div>

                {/* Organizer Details */}
                <div className="mb-4">
                    <h2 className="font-semibold text-blue-800 mb-2">Organizer Details:</h2>
                    <p className="text-gray-700">
                        <span className="font-semibold">Name:</span> {organizer?.name}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> {organizer?.email}
                    </p>
                </div>

                {/* Description */}
                <div>
                    <h2 className="font-semibold text-blue-800 mb-2">Description:</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
                <Link to={`/request/${_id}`} className="mt-4">
         <button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out"
          >
           Be a Volunteer
          </button>
         </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedDetails;