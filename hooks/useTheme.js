import { useEffect, useState } from "react";

const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme) return setDarkTheme(savedTheme === "true");

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.style.setProperty("--primary-color", "#191919");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#f4ddbb"
      );
      document.documentElement.style.setProperty("--primary-rgb", "25, 25, 25");
      document.documentElement.style.setProperty(
        "--secondary-rgb",
        "244, 221, 187"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#f4ddbb");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#191919"
      );
      document.documentElement.style.setProperty(
        "--primary-rgb",
        "244, 221, 187"
      );
      document.documentElement.style.setProperty(
        "--secondary-rgb",
        "25, 25, 25"
      );
    }
  }, [darkTheme]);

  const changeTheme = () =>
    setDarkTheme((prev) => {
      localStorage.setItem("darkTheme", !prev);
      return !prev;
    });

  return { darkTheme, changeTheme };
};

export default useTheme;
