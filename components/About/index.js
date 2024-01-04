import styles from "./About.module.scss";
import Image from "next/image";
import { images } from "../../assets/images";
import { useContext } from "react";
import { ThemeContext } from "../MainContainer";
import SectionContainer from "../SectionContainer";
import AboutItem from "./AboutItem";

const About = ({ sectionRef }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section ref={sectionRef} className={styles.about}>
      <SectionContainer title="About">
        <AboutItem title="Journey">
          Hello there. I’m Arsenii. <br />
          Currently based in Chicago, IL, USA.
          <br />
          <br />
          My journey into the world of programming began in 2017 when I started
          studying software engineering at university. During studying i have
          mastered mobile development on Android platform. After a few years,
          web development caught my attention, so right now i create Full Stack
          Web application based on React.js and Vue.js.
        </AboutItem>

        <AboutItem title="Skills" reverseAnimation skills>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <div className={styles.list__item_title}>Frontend</div>
              <div className={styles.list__item_content}>
                JavaScript
                <br />
                React.js
                <br />
                Next.js
                <br />
                Vue.js
                <br />
                Redux/RTK
                <br />
                Pinia
                <br />
                HTML
                <br />
                CSS
                <br />
                SASS
              </div>
            </li>
            <li className={styles.list__item}>
              <div className={styles.list__item_title}>Backend</div>
              <div className={styles.list__item_content}>
                Node.js
                <br />
                JWT
                <br />
                MongoDb
                <br />
                REST API
              </div>
            </li>
            <li className={styles.list__item}>
              <div className={styles.list__item_title}>Additional</div>
              <div className={styles.list__item_content}>
                Git
                <br />
                Figma
              </div>
            </li>
          </ul>
        </AboutItem>

        <AboutItem title="Education" education>
          <div className={styles.image}>
            <a
              href="https://www.wit.edu.pl"
              target="_blank"
              title="Open WIT academy in a new tab"
              rel="noreferrer"
            >
              <Image
                src={darkTheme ? images.wit_logo_light : images.wit_logo_dark}
                alt="Wit logo"
              />
            </a>
          </div>
          <div className={styles.wit_link}>
            <a
              href="https://www.wit.edu.pl/en"
              target="_blank"
              title="Open WIT academy in a new tab"
              rel="noreferrer"
            >
              Warsaw school of Information Technology | Warsaw, Poland 🇵🇱
            </a>
          </div>
          <div className={styles.year}>October 2017 - May 2019</div>
          <p>
            Fields of studying: Algorithms and Data Structures, Further Maths,
            Statistics, OOP, Relational Database, SQL, C/C++, C#, Java, HTML/CSS
            and XML.
          </p>
        </AboutItem>

        <AboutItem title="Hobbies" reverseAnimation>
          I am a very creative person, so my favorite hobby is everything
          related to art, especially music production and movies watching.
        </AboutItem>
      </SectionContainer>
    </section>
  );
};

export default About;
