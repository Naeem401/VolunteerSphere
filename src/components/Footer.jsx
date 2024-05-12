import bg from '../assets/footerbg.jpg'

const Footer = () => {
    return (

        <div>
        {/* Background Image with Overlay */}
        <div className="relative w-full h-60 overflow-hidden">
          <img src={bg} className="w-full h-full object-cover" alt="Footer Background" />
          <div className="absolute flex justify-around px-10 items-center h-full left-0 top-0 bg-black bg-opacity-80 w-full">
            {/* Contact Info */}
            <div className='text-white'>
              <h2 className='font-semibold text-xl mb-4'>Contact Us</h2>
              <p className='mb-2'>123 Volunteer St.</p>
              <p className='mb-2'>Volunteer City, VS 12345</p>
              <p className='mb-2'>Phone: (123) 456-7890</p>
              <p>Email: info@volunteersphere.com</p>
            </div>
  
            {/* Quick Links */}
            <div className='text-white'>
              <h2 className='font-semibold text-xl mb-4'>Quick Links</h2>
              <ul>
                <li className='mb-2'>Home</li>
                <li className='mb-2'>About Us</li>
                <li>FAQs</li>
              </ul>
            </div>
  
            {/* Newsletter Signup */}
            <div className='text-white'>
              <h2 className='font-semibold text-xl mb-4'>Newsletter Signup</h2>
              <p className='mb-2'>Subscribe to our newsletter for the latest volunteer updates</p>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className='bg-black bg-opacity-90 text-white py-4 text-center'>
          <p className='text-sm'>Privacy Policy | Terms of Use</p>
          <p className='mt-1'>&copy; 2024 VolunteerSphere</p>
        </div>
      </div>
    );
};

export default Footer;