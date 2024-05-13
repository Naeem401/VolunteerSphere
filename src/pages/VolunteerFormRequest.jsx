import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const VolunteerFormRequest = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
          postId: data._id,
          suggestion: e.target.suggestion.value,
          volunteerName: user.name,
          volunteerEmail: user.email,
        };
    console.log(formData)
      };
    
    return (
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Volunteer Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Display read-only details */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Post Title</label>
            <input type="text" value={data.title} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          {/* Add other read-only fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Category</label>
            <input type="text" value={data.category} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Location</label>
            <input type="text" value={data.location} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Deadline</label>
            <input type="text" value={data.deadline} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Organizer Name</label>
            <input type="text" value={data.organizer?.name} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Organizer Email</label>
            <input type="text" value={data.organizer?.email} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Volunteers Needed</label>
            <input type="text" value={data.volunteersNeeded} readOnly className="bg-gray-100 px-3 py-2 rounded-md w-full" />
          </div>
  
          {/* Display editable fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Your Suggestion</label>
            <textarea
              name="suggestion"
              className="bg-white px-3 py-2 rounded-md w-full h-24"
              placeholder="Enter your suggestion..."
              required
            ></textarea>
          </div>
  
          {/* Submit button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out"
          >
            Request
          </button>
        </form>
      </div>
    );
};

export default VolunteerFormRequest;