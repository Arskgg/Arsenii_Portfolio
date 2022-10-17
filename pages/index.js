import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import MainContainer from "../components/MainContainer";
import { useRef } from "react";

export default function Home() {
  const headerRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();

  return (
    <MainContainer sectionRefs={[headerRef, projectRef, aboutRef]}>
      <Header sectionRef={headerRef} />
      <Projects sectionRef={projectRef} />
      <About sectionRef={aboutRef} />
    </MainContainer>
  );
}
