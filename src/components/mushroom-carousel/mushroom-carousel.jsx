import { h } from 'preact'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const MushroomCarousel = () => (
  <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
    <div>
      <img src='assets/carousel/mushrooms03.jpg' />
    </div>
    <div>
      <img src='assets/carousel/conference01.jpg' />
    </div>
    <div>
      <img src='assets/carousel/mushrooms02.jpg' />
    </div>
    <div>
      <img src='assets/carousel/conference02.jpg' />
    </div>
  </Carousel>
)

export default MushroomCarousel
