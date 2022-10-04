import Head from "next/head";
import React, { createContext } from "react";
import useScroll from "../../hooks/useScroll";
import useTheme from "../../hooks/useTheme";
import NavBar from "../NavBar";
import Noise from "../Noise";
import styles from "./MainContainer.module.scss";

export const ThemeContext = createContext();

const MainContainer = ({ children, scrollContainerRef, project }) => {
  const { darkTheme, changeTheme } = useTheme();
  const { section, scrollOnClickMenueItem } = useScroll(scrollContainerRef);

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
          section={section}
          scrollOnClickMenueItem={scrollOnClickMenueItem}
        />

        <div className={styles.page_container}>{children}</div>
      </ThemeContext.Provider>
    </div>
  );
};

export default MainContainer;
