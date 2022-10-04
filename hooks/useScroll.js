import { useEffect, useState } from "react";
const useScroll = (element) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [section, setSection] = useState(0);

  const controlScroll = (element) => {
    if (
      element.target.scrollTop > lastScrollY &&
      element.target.scrollTop ===
        ((100 * window.innerHeight) / 100) * (section + 1)
    ) {
      setSection((prev) => prev + 1);
      setLastScrollY(element.target.scrollTop);
    } else if (
      element.target.scrollTop ===
      ((100 * window.innerHeight) / 100) * (section - 1)
    ) {
      setSection((prev) => prev - 1);
      setLastScrollY(element.target.scrollTop);
    }
  };

  useEffect(() => {
    const scrollContainer = element?.current;
    scrollContainer?.addEventListener("scroll", controlScroll);

    // cleanup function
    return () => {
      scrollContainer?.removeEventListener("scroll", controlScroll);
    };
  }, [lastScrollY]);

  const scrollOnClickMenueItem = (sectionNumber) => {
    element.current.scrollTo({
      top: ((100 * window.innerHeight) / 100) * sectionNumber,
      behavior: "smooth",
    });
    setSection(sectionNumber);
    setLastScrollY(((100 * window.innerHeight) / 100) * sectionNumber);
  };

  return { section, scrollOnClickMenueItem };
};

export default useScroll;
