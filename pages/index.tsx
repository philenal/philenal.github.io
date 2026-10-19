"use client"; // This is a client component

import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import Background from '../app/background';
import OverlayHome from '../components/OverlayHome';
import OverlayProjects from '../components/OverlayProjects';
import OverlayAbout from '@/components/OverlayAbout';
import OverlayArt from '@/components/OverlayArt';
import { AboutContainer, ProjectsContainer, SiteContainer, ArtContainer, HomeContainer, CanvasWrap, Anchor } from '../components/styles'
import NavBar from '../components/NavBar';
import { GlobalStyle } from '../components/styles'
import { FontRoot } from '../components/fonts'
// camera position for eggberry: [0, 0, 7]
export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <FontRoot>

<NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} artRef={artRef}/>
    <SiteContainer>
      <GlobalStyle/>
      <HomeContainer ref={homeRef}>
      <CanvasWrap>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, height: "100%", width: "100%", pointerEvents: 'none' }} 
            // @ts-ignore
            camera={{ position: [0, -1.7, 3], rotation: [Math.PI/4,0,0] }}>
        <Background/>
        </Canvas>
      </CanvasWrap>
        <OverlayHome/>
      </HomeContainer>
      <AboutContainer>
        <Anchor ref={aboutRef}>
        <OverlayAbout/>
        </Anchor>
      </AboutContainer>
      <ProjectsContainer>
        <Anchor ref={projectsRef}>
        <OverlayProjects/>
        </Anchor>
      </ProjectsContainer>
      <ArtContainer>
        <Anchor ref={artRef}>
        <OverlayArt/>
        </Anchor>
      </ArtContainer>
      </SiteContainer>
    </FontRoot>
  );
}