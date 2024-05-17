import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ManageMyPostPage = () => {
  const { user } = useContext(AuthContext)
  const [posts, setPosts] = useState([]);

   
  useEffect(() => {
      axios.get(`https://volunteer-sphere-backend-eight.vercel.app/needVolunteerPost/${user.email}`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
        });
  
  }, [user]);
console.log(posts)
  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await axios.delete(`https://volunteer-sphere-backend-eight.vercel.app/mypost/${id}`);
        if (response.data.deletedCount > 0) {
          const remainingData = posts.filter((post) => post._id !== id);
          setPosts(remainingData);
          await Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          });
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the post.',
          icon: 'error'
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-screen-lg px-4">
        <h2 className="text-3xl font-bold mb-4 text-center mt-4">My All Volunteer Posts</h2>
        {posts.length === 0 ? (
          <p className="text-center">No volunteer posts found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{post.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{post.location}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <Link to={`/update/${post._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32 mt-2"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageMyPostPage;
