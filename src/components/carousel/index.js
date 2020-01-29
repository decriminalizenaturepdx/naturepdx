const Carousel = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="mySlider" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#mySlider" data-slide-to="0" class="active"> </li>
                            <li data-target="#mySlider" data-slide-to="1"> </li>
                        </ol>


                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img src="fruit.jpg" alt="fruits" />
                                <div class="carousel-caption">
                                    <h1> Assorted fruit</h1>
                                </div>
                            </div>

                            <div class="item">
                                <img src="raspberries.jpg" alt="fruits" />
                                <div class="carousel-caption">
                                    <h1> Raspberries</h1>
                                </div>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#mySlider" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only"> Previous</span>
                        </a>
                        <a class="right carousel-control" href="#mySlider" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>);
}
export default Carousel