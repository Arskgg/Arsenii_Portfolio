import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import MainContainer from "../components/MainContainer";
import Experiance from '../components/Experiance'
import { useRef } from "react";

export default function Home() {
  const headerRef = useRef();
  const projectRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();

  return (
    <MainContainer sectionRefs={[headerRef, projectRef, experienceRef, aboutRef]}>
      <Header sectionRef={headerRef} />
      <Projects sectionRef={projectRef} />
      <Experiance sectionRef={experienceRef}/>
      <About sectionRef={aboutRef} />
    </MainContainer>
  );
}
