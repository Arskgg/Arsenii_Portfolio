const useScroll = () => {
  const scrollOnClickMenueItem = (element, index) => {
    element.current.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollOnClickMenueItem };
};

export default useScroll;
