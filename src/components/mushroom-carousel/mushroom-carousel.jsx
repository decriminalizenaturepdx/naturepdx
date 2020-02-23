import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Conference1 from '../../assets/carousel/conference01.jpg'
import Conference2 from '../../assets/carousel/conference02.jpg'
import Mushrooms3 from '../../assets/carousel/mushrooms03.jpg'
import Mushrooms2 from '../../assets/carousel/mushrooms02.jpg'

const MushroomCarousel = () => (
  <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
    <div>
      <img src={Mushrooms3} alt="Mushroom foraging" />
    </div>
    <div>
      <img src={Conference1} alt="Medicinal mushroom conference" />
    </div>
    <div>
      <img src={Mushrooms2} alt="Mushroom foraging" />
    </div>
    <div>
      <img src={Conference2} alt="Medicinal mushroom conference"/>
    </div>
  </Carousel>
)

export default MushroomCarousel
