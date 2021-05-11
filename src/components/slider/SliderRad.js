import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./sliderrad.module.css";
import { Carousel } from "react-responsive-carousel";
import oneImage from "../images/one.jpg";
import twoImage from "../images/two.png";
import threeImage from "../images/three.jpg";
import fourImage from "../images/four.jpg";
// import threeImage from '../../images/3.jpg'
const SliderRad = () => {
  return (
    <div className={styles.rootslider}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        autoFocus={true}
      >
        <div className={styles.rootslideritem}>
          <img src={oneImage} alt="onetaxi" />
          {/* <p className="legend">Legend 1</p> */}
          <div className={styles.legend}>
            <h3>سرویس ویژه بانوان</h3>
            <p> سرویس ویژه بانوان سرویس ویژه بانوانسرویس ویژه بانوان</p>
          </div>
        </div>
        <div className={styles.rootslideritem}>
          <img src={twoImage} alt="onetaxi" />
          <div className={styles.legend}>
            <h3>محاسبه قبل از سفر</h3>
            <p>امکان مشـاهـده هزیـنه سفـر</p>
            <p>امکان مشاهده مبلغ سفر</p>
            <p>تخفیف قبل از شروع سفر</p>
          </div>
        </div>
        <div className={styles.rootslideritem}>
          <img src={threeImage} alt="onetaxi" />
          <div className={styles.legend}>
            <h3>امکان رویت راننده</h3>
            <p>امکان رویت تصویر و مشخصات راننده و خودرو(قبل از شروع سفر)</p>
          </div>
        </div>
        <div className={styles.rootslideritem}>
          <img src={fourImage} alt="onetaxi" />
          <div className={styles.legend}>
            <h3>امکان رویت راننده</h3>
            <p>امکان رویت تصویر و مشخصات راننده و خودرو(قبل از شروع سفر)</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderRad;
