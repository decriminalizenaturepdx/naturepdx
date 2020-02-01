import { h } from 'preact'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MushroomCarousel = () => (
  <Carousel>
    <div>
      <img src="assets/carousel/mushrooms03.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="assets/carousel/conference01.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="assets/carousel/mushrooms02.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="assets/carousel/conference02.jpg" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
)

export default MushroomCarousel
