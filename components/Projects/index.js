import Image from "next/image";
import SectionContainer from "../SectionContainer";
import styles from "./Projects.module.scss";
import { images } from "../../assets/images";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "../ButtonLink";

const Projects = ({ sectionRef }) => {
  const refItem = useRef(null);
  const isInView = useInView(refItem, { once: true });

  return (
    <section ref={sectionRef} className={styles.projects}>
      <SectionContainer title="Projects">
        <div ref={refItem} className={styles.slider_item}>
          <div
            className={styles.slider_item__stripe_image}
            style={{
              transform: isInView ? "none" : "translateX(-400px)",
              opacity: isInView ? 1 : 0,
            }}
          >
            <Link href="/garage">
              <a>
                <Image
                  src={images.garage}
                  alt="Garage project"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </a>
            </Link>
          </div>

          <div
            className={styles.stripe__description}
            style={{
              transform: isInView ? "none" : "translateX(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in-out",
            }}
          >
            <div className={styles.title}>Garage</div>

            <div className={styles.description}>
              Garage is Full Stack Social media app for fans of unusual cars.
            </div>

            <div className={styles.btns_container}>
              <ButtonLink text="Learn More" page="/garage" />

              <ButtonLink
                href="https://social-garage.vercel.app/"
                target="_blank"
                rel="noreferrer"
                text="Live Page"
              />
            </div>
          </div>

          <div
            className={styles.slider_item__content}
            style={{
              transform: isInView ? "none" : "translateX(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in-out",
            }}
          >
            <div className={styles.title}>Garage</div>

            <div className={styles.description}>
              Garage is Full Stack Social media app for fans of unusual cars.
            </div>

            <div className={styles.btns_container}>
              <ButtonLink text="Learn More" page="/garage" />

              <ButtonLink
                href="https://social-garage.vercel.app/"
                target="_blank"
                rel="noreferrer"
                text="Live Page"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Projects;
