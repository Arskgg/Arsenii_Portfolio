import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./GalleryItem.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

const GalleryItem = ({ name, src, alt, withSlider, reverse, sliderImages }) => {
  const [sliderX, setSliderX] = useState(0);
  const handleNextImg = () => {
    sliderX === -200 ? setSliderX(0) : setSliderX((prev) => prev - 100);
  };

  const handlePrevImg = () => {
    sliderX === 0 ? setSliderX(-200) : setSliderX((prev) => prev + 100);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const inViewAnimationFormLeft = {
    transform: isInView ? "none" : "translateX(-400px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
  };

  const inViewAnimationFormRight = {
    transform: isInView ? "none" : "translateX(400px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
  };

  return (
    <div ref={ref} className={styles.item}>
      <div
        className={styles.name}
        style={reverse ? inViewAnimationFormRight : inViewAnimationFormLeft}
      >
        {name}
      </div>

      {withSlider ? (
        <div
          className={styles.slider_container}
          style={reverse ? inViewAnimationFormLeft : inViewAnimationFormRight}
        >
          {sliderImages.map((img, i) => (
            <div
              key={"image" + i}
              className={`${styles.img} ${styles.gallery__img}`}
              style={{ transform: `translateX(calc(${sliderX}% - 2%))` }}
            >
              <Image src={img} objectFit="contain" alt={img} priority />
            </div>
          ))}
          <div
            className={`${styles.scroll_btn} ${styles.next_btn}`}
            onClick={handleNextImg}
          >
            <ArrowForwardIosIcon />
          </div>
          <div
            className={`${styles.scroll_btn} ${styles.prev_btn}`}
            onClick={handlePrevImg}
          >
            <ArrowBackIosIcon />
          </div>
        </div>
      ) : (
        <div
          className={styles.img}
          style={reverse ? inViewAnimationFormLeft : inViewAnimationFormRight}
        >
          <Image src={src} objectFit="contain" alt={alt} priority />
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
