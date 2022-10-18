import Head from "next/head";
import React, { createContext } from "react";
import useScroll from "../../hooks/useScroll";
import useTheme from "../../hooks/useTheme";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Noise from "../Noise";
import styles from "./MainContainer.module.scss";

export const ThemeContext = createContext();

const MainContainer = ({ children, project, sectionRefs }) => {
  const { darkTheme, changeTheme } = useTheme();
  const { scrollOnClickMenueItem } = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Arsenii Perevertailo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Noise />

      <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
        <NavBar
          project={project}
          sectionRefs={sectionRefs}
          scrollOnClickMenueItem={scrollOnClickMenueItem}
        />

        {children}
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default MainContainer;
