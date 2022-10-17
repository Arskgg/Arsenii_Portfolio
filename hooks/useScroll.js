import { useState } from "react";

const useScroll = () => {
  const [section, setSection] = useState(0);

  const scrollOnClickMenueItem = (element, index) => {
    element.current.scrollIntoView({ behavior: "smooth" });
    setSection(index);
  };

  return { section, scrollOnClickMenueItem, setSection };
};

export default useScroll;
