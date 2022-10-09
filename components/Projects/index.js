import Image from "next/image";
import SectionContainer from "../SectionContainer";
import styles from "./Projects.module.scss";
import { images } from "../../assets/images";
import Link from "next/link";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <SectionContainer title="Projects">
        <div className={styles.slider_item}>
          <div className={styles.slider_item__stripe_container}>
            <div className={styles.slider_item__stripe_image}>
              <Link href="/garage">
                <Image
                  src={images.garage}
                  alt="Garage project"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>

            <div className={styles.stripe__description}>
              <div className={styles.title}>Garage</div>

              <div className={styles.description}>
                Garage is Full Stack Social media app for fans of unusual cars.
              </div>

              <div className={styles.btns_container}>
                <Link href="/garage">
                  <a>Learn More</a>
                </Link>

                <a
                  href="https://social-garage.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>

            <div className={styles.filmstrip}></div>
          </div>
          <div className={styles.slider_item__content}>
            <div className={styles.title}>Garage</div>

            <div className={styles.description}>
              Garage is Full Stack Social media app for fans of unusual cars.
            </div>

            <div className={styles.btns_container}>
              <Link href="/garage">
                <a>Learn More</a>
              </Link>

              <a
                href="https://social-garage.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Projects;
