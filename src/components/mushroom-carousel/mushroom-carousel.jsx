import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const MushroomCarousel = () => (
  <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
    <div>
      <img src="https://res.cloudinary.com/dakhemwii/image/upload/v1582495208/mushrooms03_owtrgs.png" alt="Mushroom foraging" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/dakhemwii/image/upload/v1582495250/conference01_dgklgf.jpg" alt="Medicinal mushroom conference" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/dakhemwii/image/upload/v1582495220/mushrooms02_fynwh3.jpg" alt="Mushroom foraging" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/dakhemwii/image/upload/v1582495238/conference02_qr8esd.jpg" alt="Medicinal mushroom conference"/>
    </div>
  </Carousel>
)

export default MushroomCarousel
