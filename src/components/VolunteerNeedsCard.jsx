import { Link } from "react-router-dom";


const VolunteerNeedsCard = ({needVolunteerData}) => {
const {thumbnail, title, category, deadline, _id} = needVolunteerData || {}
console.log(_id)
    return (
        <div className="shadow-xl rounded-lg overflow-hidden flex flex-col h-full">
        <img className="w-full h-64 object-cover" src={thumbnail} alt={title} />
        <div className="flex-grow p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-indigo-600 mb-2">{category}</p>
            <p className="text-gray-600 mb-4"> Deadline: {new Date(deadline).toLocaleDateString()}</p>
          </div>
         <Link to={`/details/${_id}`}>
         <button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out"
          >
            View Details
          </button>
         </Link>
        </div>
      </div>
    );
};

export default VolunteerNeedsCard;