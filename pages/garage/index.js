import styles from "../../styles/Project.module.scss";
import MainContainer from "../../components/MainContainer";
import Divider from "../../components/Divider";
import Image from "next/image";
import { images } from "../../assets/images";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import Footer from "../../components/Footer";

const Garage = () => {
  const [sliderX, setSliderX] = useState(0);

  const handleNextImg = () => {
    sliderX === -200 ? setSliderX(0) : setSliderX((prev) => prev - 100);
  };

  const handlePrevImg = () => {
    sliderX === 0 ? setSliderX(-200) : setSliderX((prev) => prev + 100);
  };

  return (
    <div>
      <MainContainer navbar={false} project="Garage">
        <div className={styles.page_container}>
          <Divider className={styles.top_divider} />

          <div className={styles.content_container}>
            <div className={styles.title}>GARAGE</div>

            <div className={styles.image_tech_container}>
              <div className={styles.image}>
                <Image
                  src={images.garage}
                  alt="Garage project"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <div className={styles.technology}>
                <div className={styles.technology__title}>Technology Used:</div>
                <ul className={styles.list}>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    JavaScript
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    React
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    SASS
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    Redux / RTK Query
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    Frame Motion
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    Node.js
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    Express
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    Mongoose
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    JWT
                  </li>
                  <li className={styles.list__item}>
                    <DoneIcon />
                    REST API
                  </li>
                </ul>
                <div className={styles.btn}>
                  <a href="#">Live Page</a>
                </div>
              </div>
            </div>

            <div className={styles.about}>
              <div className={styles.subtitle}>About</div>
              <div className={styles.description}>
                Garage is Full Stack Web Application created by myself based on
                React.js for client side and Node.js for Server with good
                adaptive for mobile devices as on desktop. Users able to
                register and login to make a post of unusual cars with their
                tech specs and leave a comment under any post. Every user has
                own profile with their followers and posts. Application also
                contain search functionality among all post to help user find
                certain car.
              </div>
            </div>
          </div>
          <Divider className={styles.bottom_divider} />

          <div className={styles.gallery}>
            <div className={styles.subtitle}>Gallery</div>
            <Divider className={styles} />
            <div className={styles.gallery__container}>
              <div className={styles.gallery__item_mobile}>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_auth_phone}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item_mobile}>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_home_phone}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item_mobile}>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_details_phone}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item_mobile}>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_create_phone}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item_mobile}>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_profile_phone}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item}>
                <div className={styles.gallery__name}>Auth</div>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_auth}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item}>
                <div className={styles.gallery__name}>Home</div>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_home}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item}>
                <div className={styles.gallery__name}>Profile</div>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_profile}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item}>
                <div className={styles.gallery__name}>Post Create</div>
                <div className={styles.gallery__img}>
                  <Image
                    src={images.garage_create}
                    objectFit="contain"
                    alt="Garage auth page"
                  />
                </div>
              </div>

              <div className={styles.gallery__item}>
                <div className={styles.gallery__name}>Post Details</div>

                <div className={styles.gallery__imgs_container}>
                  <div
                    className={styles.gallery__img}
                    style={{ transform: `translateX(${sliderX}%)` }}
                  >
                    <Image
                      src={images.garage_details_1}
                      objectFit="contain"
                      alt="Garage auth page"
                    />
                  </div>
                  <div
                    className={styles.gallery__img}
                    style={{ transform: `translateX(${sliderX}%)` }}
                  >
                    <Image
                      src={images.garage_details_2}
                      alt="Garage auth page"
                    />
                  </div>
                  <div
                    className={styles.gallery__img}
                    style={{ transform: `translateX(${sliderX}%)` }}
                  >
                    <Image
                      src={images.garage_details_3}
                      alt="Garage auth page"
                    />
                  </div>

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
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </MainContainer>
    </div>
  );
};

export default Garage;
