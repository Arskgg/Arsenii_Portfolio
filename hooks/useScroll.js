const useScroll = () => {
  const scrollOnClickMenueItem = (element) => {
    // element.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      left: 0,
      top: element.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return { scrollOnClickMenueItem };
};

export default useScroll;
