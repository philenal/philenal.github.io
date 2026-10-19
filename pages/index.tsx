"use client"; // This is a client component

import React, { useRef } from 'react'
import OverlayHome from '../components/OverlayHome';
import OverlayProjects from '../components/OverlayProjects';
import OverlayAbout from '@/components/OverlayAbout';
import OverlayArt from '@/components/OverlayArt';
import { AboutContainer, ProjectsContainer, SiteContainer, ArtContainer, HomeContainer, Anchor, CloudLayer } from '../components/styles'
import NavBar from '../components/NavBar';
import { GlobalStyle } from '../components/styles'
import { FontRoot } from '../components/fonts'
export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <FontRoot>
      <GlobalStyle/>
      <CloudLayer aria-hidden="true">
        <span />
        <span />
        <span />
      </CloudLayer>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} artRef={artRef}/>
    <SiteContainer>
      <HomeContainer ref={homeRef}>
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