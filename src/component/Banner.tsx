import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/img/banner.png";
import banner2 from "../assets/img/banner.png";
import banner3 from "../assets/img/banner.png";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000 // Thời gian chờ giữa các slide (5 giây)
    };

    return (
        <div style={{ backgroundColor: '#d3f2ff'}}>
            <div className="container mx-auto mb-8" style={{height:"auto"}}>
                <Slider {...settings}>
                    <div>
                        <img src={banner1} alt="banner1" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img src={banner2} alt="banner2" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <img src={banner3} alt="banner3" style={{ width: '100%' }} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
