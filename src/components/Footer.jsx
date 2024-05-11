import bg from '../assets/footerbg.jpg'

const Footer = () => {
    return (
        
         <div>

<div className="relative w-full h-60 overflow-hidden">
                <img src={bg} className="w-full object-cover" />
                <div className="absolute flex justify-around px-10 items-center h-full left-0 top-0 bg-black bg-opacity-90 w-full">
                    <div className='text-white'>
                        <h2 className='font-semibold text-xl'>Contact Us</h2>
                        <p>123 Volunteer St.</p>
                        <p>Volunteer City, VS 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@volunteersphere.com</p>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-semibold text-xl'>Quick Links</h2>
                        <ul>
                            <li> Home</li>
                            <li>About Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-semibold text-xl'> Newsletter Signup</h2>
                        <p>Subscribe to our newsletter for <br /> the latest volunteer updates</p>
                    </div>
                </div>
            </div>
            <div className='bg-black bg-opacity-95 text-white'>
                    <h2 className='text-center'>Privacy Policy | Terms of Use</h2>
                    <p className='text-center'>© 2024 VolunteerSphere</p>
                </div>
         </div>
    );
};

export default Footer;