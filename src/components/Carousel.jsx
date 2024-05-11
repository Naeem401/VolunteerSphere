// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/img/home1_slide1.jpeg'
import bgimg2 from '../assets/img/home1_slide2.jpeg'
import bgimg3 from '../assets/img/home1_slide3.jpeg'

export default function Carousel() {
  return (
    <div className='px-6 py-5 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Discover Opportunities to Volunteer and Inspire.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Connecting Passion with Purpose at VolunteerSphere'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Find Your Place in the VolunteerSphere Movement.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}