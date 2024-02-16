import { Component } from "react";
import Slider from "scroll-carousel-react";
import styles from "./styles/styles.module.css";

export default class SliderFor extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 8,
      shift: 100,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className={styles.carusel_item}>Для стартапов</div>
          <div className={styles.carusel_item}>Для SMB</div>
          <div className={styles.carusel_item}>Для корпораций</div>
        </Slider>
      </div>
    );
  }
}
