import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";


const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());
  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const thumbnail = form.thumbnail.value
    const title = form.title.value
    const deadline = startDate
    const category = form.category.value
    const location = form.location.value
    const volunteersNeeded = parseFloat(form.volunteersNeeded.value)
    const description = form.description.value
    const volunteerPostData = {
      thumbnail,
      title,
      deadline,
      category,
      location,
      volunteersNeeded,
      description,
      organizer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    }
    console.log(volunteerPostData)
    try {
      const { data } = await axios .post(
        `http://localhost:5000`,
        volunteerPostData
      )
      console.log(data)
      toast.success('Volunteer Data Add Successfully!')
      form.reset();
    } catch (err) {
      console.log(err)
    }
  }
    return (
  
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
      <h2 className='text-lg font-semibold text-gray-700 capitalize '>
      Add Volunteer Post
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-gray-700 ' htmlFor='job_title'>
            Thumbnail
            </label>
            <input
              id='thumbnail'
              type="text" name="thumbnail"
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 ' htmlFor='emailAddress'>
            Post Title
            </label>
            <input
              id='title'
              type="text" name="title"
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Category</label>
            <input
              id='category'
              type="text" name="category"
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Location</label>
            <input
              id='location'
              type="text" name="location"
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700 '>
            No. of Volunteers Needed
            </label>
            <input className='border p-2 rounded-md'  type="number" id="volunteersNeeded" name="volunteersNeeded" />
          </div>
          <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          <div>
            <label className='text-gray-700 ' htmlFor='organizerName'>
            Organizer Name
            </label>
            <input
            disabled
            defaultValue={user?.displayName}
              id='organizerName'
              name='organizerName'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 ' htmlFor='organizerEmail'>
            Organizer Email
            </label>
            <input
            disabled
            defaultValue={user?.email}
              id='organizerEmail'
              name='organizerEmail'
              type='email'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <label className='text-gray-700 ' htmlFor='description'>
            Description
          </label>
          <textarea
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            name='description'
            id='description'
          ></textarea>
        </div>
        <div className='flex justify-end mt-6'>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
    );
};

export default AddVolunteerPost;