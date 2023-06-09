import featureProContent from "../../../data/properties";
import Slider from "react-slick";

const FeatureProperties = () => {
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
    };

    return (
        <>
            <Slider {...settings} arrows={false}>
                {/* {featureProContent.slice(0, 5).map((item) => ( */}
                    <div className="item" >
                        <div className="feat_property home7">
                            <div >
                                <img
                                    // className="img-whp"
                                    src={'https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684397458/winner-color-vert_4x-1_i02g4n.webp'}
                                    alt="properties identity"
                                />

                                {/* <div className="thmb_cntnt">
                                    <ul className="tag mb0">
                                        {item.saleTag.map((val, i) => (
                                            <li
                                                className="list-inline-item"
                                                key={i}
                                            >
                                                <a href="#">{val}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <a className="fp_price" href="#">
                                        ${item.price}
                                        <small>/mo</small>
                                    </a>
                                    <h4 className="posr color-white">
                                        {item.title}
                                    </h4>
                                </div> */}
                            </div>
                        </div>
                    </div>
                {/* ))} */}
            </Slider>
        </>
    );
};

export default FeatureProperties;
