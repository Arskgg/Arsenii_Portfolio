import Head from "next/head";
import React, { createContext, useMemo } from "react";
import useTheme from "../../hooks/useTheme";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Noise from "../Noise";
import styles from "./MainContainer.module.scss";
import { getDesignTokens } from "../../styles/mui-theme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

export const ThemeContext = createContext();

const MainContainer = ({ children, project, sectionRefs }) => {
  const { darkTheme, changeTheme } = useTheme();

  const theme = useMemo(() => createTheme(getDesignTokens()));

  return (
    <div className={styles.container}>
      <Head>
        <title>Arsenii Perevertailo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Noise />

      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
          <NavBar project={project} sectionRefs={sectionRefs} />

          {children}
          <Footer />
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default MainContainer;
