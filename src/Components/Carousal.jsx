import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Carousal.css";

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hlo">
      <h3> <b>Stories</b> </h3>
      <h1><b>What our patients say!</b></h1>

      <Slider className="one" {...settings}>
        <div>
          <h4> Navnnet singh </h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
            Best place to get your teeth done.i have done 2 extraction of teeth
            which is completely painless and needly very soon.also filing of 8
            teeth which is also very smooth.no waiting time and Doctor is
            listens your all problems before starting procedure.
          </p>
        </div>
        <div>
          <h4> Saumya srivastava</h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
          Literallyt the best experiance l've had at a dental clinic.Super
            professional doctors,a huge focus on patient comfort and extremly
            affordable for the facilities they provide.Been here twice and each
            time has been a pleasure
          </p>
        </div>
        <div>
          <h4> Rohit Raj </h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
          Best place to get your teeth done.i have done 2 extraction of teeth
            which is completely painless and needly very soon.also filing of 8
            teeth which is also very smooth.no waiting time and Doctor is
            listens your all problems before starting procedure.
          </p>
        </div>

        <div>
          <h4> Rahul Garad</h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
          Literallyt the best experiance l've had at a dental clinic.Super
            professional doctors,a huge focus on patient comfort and extremly
            affordable for the facilities they provide.Been here twice and each
            time has been a pleasure
          </p>
        </div>

        <div>
          <h4> Raj Kumar  </h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
          Best place to get your teeth done.i have done 2 extraction of teeth
            which is completely painless and needly very soon.also filing of 8
            teeth which is also very smooth.no waiting time and Doctor is
            listens your all problems before starting procedure.
          </p>
        </div>
        <div>
          <h4> Rohit Kumar </h4>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>
          Literallyt the best experiance l've had at a dental clinic.Super
            professional doctors,a huge focus on patient comfort and extremly
            affordable for the facilities they provide.Been here twice and each
            time has been a pleasure
          </p>
        </div>

        {/* Add more testimonials as needed */}
      </Slider>
    </div>
  );
};

export { Carousal };
