const useScroll = () => {
  const scrollOnClickMenueItem = (element) => {
    window.scrollTo({
      left: 0,
      top: element.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return { scrollOnClickMenueItem };
};

export default useScroll;
