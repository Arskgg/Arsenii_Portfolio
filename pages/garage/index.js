import styles from "../../styles/Project.module.scss";
import MainContainer from "../../components/MainContainer";
import Divider from "../../components/Divider";
import Image from "next/image";
import { images } from "../../assets/images";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import GalleryItem from "../../components/GalleryItem";
import ButtonLink from "../../components/ButtonLink";
import { motion } from "framer-motion";

const Garage = () => {
  const [sliderX, setSliderX] = useState(0);
  const handleNextImg = () => {
    sliderX === -200 ? setSliderX(0) : setSliderX((prev) => prev - 100);
  };

  const handlePrevImg = () => {
    sliderX === 0 ? setSliderX(-200) : setSliderX((prev) => prev + 100);
  };

  return (
    <MainContainer navbar={false} project="Garage">
      <main className={styles.page_container}>
        <Divider className={styles.top_divider} />

        <div className={styles.content_container}>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            GARAGE
          </motion.div>

          <div className={styles.image_tech_container}>
            <motion.div
              className={styles.image}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Image
                src={images.garage}
                alt="Garage project"
                objectFit="contain"
                layout="fill"
                priority
              />
            </motion.div>
            <motion.div
              className={styles.technology}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
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
              <ButtonLink
                href="https://social-garage.vercel.app/"
                target="_blank"
                rel="noreferrer"
                text="Live Page"
              />
            </motion.div>
          </div>

          <motion.div
            className={styles.about}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className={styles.subtitle}>About</div>
            <div className={styles.description}>
              Garage is Full Stack Web Application based on React.js for client
              side and Node.js for Server. App designed for desktop and mobile
              devices. Users are able to register and login to make a post of
              unusual cars with their tech specs and leave a comment under any
              post. Every user has own profile with their followers and posts.
              Application also contain search functionality among all post to
              help user find certain car.
            </div>
          </motion.div>
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
                  priority
                />
              </div>
            </div>

            <div className={styles.gallery__item_mobile}>
              <div className={styles.gallery__img}>
                <Image
                  src={images.garage_home_phone}
                  objectFit="contain"
                  alt="Garage auth page"
                  priority
                />
              </div>
            </div>

            <div className={styles.gallery__item_mobile}>
              <div className={styles.gallery__img}>
                <Image
                  src={images.garage_details_phone}
                  objectFit="contain"
                  alt="Garage auth page"
                  priority
                />
              </div>
            </div>

            <div className={styles.gallery__item_mobile}>
              <div className={styles.gallery__img}>
                <Image
                  src={images.garage_create_phone}
                  objectFit="contain"
                  alt="Garage auth page"
                  priority
                />
              </div>
            </div>

            <div className={styles.gallery__item_mobile}>
              <div className={styles.gallery__img}>
                <Image
                  src={images.garage_profile_phone}
                  objectFit="contain"
                  alt="Garage auth page"
                  priority
                />
              </div>
            </div>

            <GalleryItem
              name="Auth"
              src={images.garage_auth}
              alt="Garage auth page"
            />

            <GalleryItem
              name="Home"
              src={images.garage_home}
              alt="Garage home page"
              reverse
            />

            <GalleryItem
              name="Profile"
              src={images.garage_profile}
              alt="Garage profile page"
            />

            <GalleryItem
              name="Post Create"
              src={images.garage_create}
              alt="Garage post creation page"
              reverse
            />

            <GalleryItem
              name="Post Details"
              alt="Garage post details page"
              withSlider
              sliderImages={[
                images.garage_details_1,
                images.garage_details_2,
                images.garage_details_3,
              ]}
            />
          </div>
        </div>
      </main>
    </MainContainer>
  );
};

export default Garage;
