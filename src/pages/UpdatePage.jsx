import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from 'react-datepicker'

const UpdatePage = () => {
    const data = useLoaderData()
    const {thumbnail, title, deadline, category, location, volunteersNeeded, description, _id} = data || {}
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
          name: user?.displayName
        },
      }
      console.log(volunteerPostData)
      fetch(`http://localhost:9000/volunteer-post/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(volunteerPostData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourists Spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
}

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
      <h2 className='text-lg font-semibold text-gray-700 capitalize '>
      Update Volunteer Post
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
              defaultValue={thumbnail}
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
              defaultValue={title}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Category</label>
            <input
              id='category'
              type="text" name="category"
              defaultValue={category}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Location</label>
            <input
              id='location'
              type="text" name="location"
              defaultValue={location}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700 '>
            No. of Volunteers Needed
            </label>
            <input className='border p-2 rounded-md' defaultValue={volunteersNeeded}  type="number" id="volunteersNeeded" name="volunteersNeeded" />
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
          defaultValue={description}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            name='description'
            id='description'
          ></textarea>
        </div>
        <div className='flex justify-end mt-6'>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
            Update
          </button>
        </div>
      </form>
    </section>
  </div>
    );
};

export default UpdatePage;