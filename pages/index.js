import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { useRef } from "react";
import Projects from "../components/Projects";
import MainContainer from "../components/MainContainer";

export default function Home() {
  const scrollContainer = useRef();

  return (
    <MainContainer scrollContainerRef={scrollContainer} navbar={true}>
      <div className={styles.main} ref={scrollContainer}>
        <Header />
        <Projects />
        <About />
        <Footer />
      </div>
    </MainContainer>
  );
}
