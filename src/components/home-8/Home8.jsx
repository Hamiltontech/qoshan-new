import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
// import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import ComfortPlace from "./ComfortPlace";
import Partners from "../common/Partners";
import Testimonials from "./Testimonials";
import HeroSlider from "./HeroSlider";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedProps from "./FeaturedProps";
import HeroFilter from "./HeroFilter";
import CategoriesFilter from "../blog-list-2/CategoriesFilter";
import Advert from "./advert";

import FeaturedProperties from "../home/FeaturedProperties";
// import Watchqoshan from './Watchqoshan'



// diala
import axios from "axios";
import { useEffect, useState } from "react";

const Home8 = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
    setData(res?.data?.data)
  }).catch((err)=>{
    console.log(err)
  })
  }, [])

  let featured = data?.filter((ele) => ele?.attributes?.Promoted === true) 
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 4th Home Slider --> */}
      <section className="p0">
        <div className="container-fluid p0">
          <div className="home8-slider">
            <div className="bs_carousel ">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="property-search search-overlay">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <HeroFilter />
            <div className="text-center mt10">
        {featured.length > 0 && <Advert/>}
      </div>
          </div>
        </div>
      </div>
      
      {/* End .container */}

      <div className="mouse_scroll">
        <a href="#feature-property">
          
        </a>
      </div>
    </section>

      <section id="feature-property" className="feature-property "  style={{marginLeft: 30, marginRight: 30}}>
        <div className="row">
          <div className="col-lg-12">
          

            <div className="main-title mb40">

              <h2>عقارات مميزة</h2>
              <p>
              <a className="float-start" href="#">
                  إعرض المزيد <span className="flaticon-back"></span>
                </a>
                عقارات مميزة لكم من فريق قوشان.
                
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15">
              <FeaturedProps featured={featured}/>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>عقارات حسب المنطقة</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Find Comfort Place --> */}
      <section id="comfort-place" className="comfort-place pb30 bb1" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>جميع العقارات</h2>
               
              </div>
            </div>
          </div>
          <div className="row" dir="rtl">
            <ComfortPlace data={data} featured={featured}/>
          </div>
        </div>
      </section>

            {/* <!-- Feature news --> */}
            <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>أخبارك من قوشان </h2>
                {/* <p>Handpicked properties by our team.</p> */}
              </div>
            </div>
            <div className="lsd_list">
          <CategoriesFilter/>
        </div> 
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Home Design --> */}
      {/* <section id="feature-property" className="feature-property "  style={{marginLeft: 0, marginRight: 0}}>

 <div className="row">

 <div className="col-lg-12">

 <div className="main-title mb40">

<Watchqoshan/>

</div>

 </div>

 </div>

 </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one home3">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home3 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Home8;
