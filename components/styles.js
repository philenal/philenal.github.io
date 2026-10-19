
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: clip;
    background:
      radial-gradient(1200px 600px at 80% -10%, rgba(221, 214, 243, 0.55), transparent 60%),
      radial-gradient(900px 500px at -10% 20%, rgba(250, 172, 168, 0.28), transparent 55%),
      #fbf8fb;
    color: #4e4b60;
  }
  html {
    scroll-padding-top: 96px;
  }
  h1 {
    scroll-margin-top: 96px;
  }
  ::selection {
    background: #faaca8;
    color: #3c2430;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
`;

const glassSurface = `
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(250, 172, 168, 0.42);
  box-shadow: 0 14px 36px rgba(70, 48, 96, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`

export const SiteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow-x: clip;
  font-family: var(--font-body), "Segoe UI", sans-serif;
  color: #4e4b60;
  & h1 {
    font-family: var(--font-heading), "Segoe UI", sans-serif;
    font-weight: 600;
    font-synthesis: none;
    background: #ddd6f3;
    background: linear-gradient(105deg, #faaca8, #ddd6f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.02;
    letter-spacing: -0.03em;
    font-size: clamp(2.75rem, 7vw, 5.5rem);
    margin: 0.15em 0 0.4em;
    text-align: center;
  }
  & p {
    overflow-wrap: break-word;
    line-height: 1.65;
  }
`

export const Container = styled.div`
  font-family: var(--font-body), "Segoe UI", sans-serif;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  color: #4e4b60;
  box-sizing: border-box;
  padding: 0 16px 3rem;
  @media (max-width: 780px) {
    padding-top: 84px;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: var(--font-body), "Segoe UI", sans-serif;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  overflow: hidden;
  & p {
    color: #5e516c;
  }
  & h1 {
    font-family: var(--font-heading), "Segoe UI", sans-serif;
    padding: 0 0.04em;
    font-weight: 600;
    font-synthesis: none;
    white-space: nowrap;
    letter-spacing: -0.035em;
    line-height: 0.95;
    margin: clamp(2.4rem, 10vh, 5.5rem) auto 0.4rem;
    width: max-content;
    max-width: calc(100% - 8px);
    position: relative;
    z-index: 2;
    font-size: clamp(2.75rem, calc((88vw - 300px) / 6.1), 10.5rem);
    text-align: center;
    @media (max-width: 780px) {
      font-size: clamp(2.5rem, calc((100vw - 40px) / 6.1), 7.25rem);
      margin-top: 0.4rem;
    }
  }
`

export const CanvasWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`

export const Anchor = styled.div`
  scroll-margin-top: 96px;
`

const sectionBase = `
  font-family: var(--font-body), "Segoe UI", sans-serif;
  width: 100%;
  color: #4e4b60;
  box-sizing: border-box;
  padding: 1.5rem 0 4.5rem;
`

export const AboutContainer = styled.div`
  ${sectionBase}
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  & li {
    font-size: 1rem;
    line-height: 1.65;
    margin: 0 0 0.95rem;
  }
  & ul {
    margin: 1.1rem 0 0;
    padding-left: 1.15rem;
  }
  & li::marker {
    color: #e09aaa;
  }
`

export const ProjectsContainer = styled.div`
  ${sectionBase}
  height: fit-content;
  padding-bottom: 3rem;
`
export const ArtContainer = styled.div`
  ${sectionBase}
  height: fit-content;
`

export const Center = styled.div`
  text-align: center;
`

export const Profile = styled.div`
  margin: 0;
  background-image: url('/profile.jpeg');
  background-size: cover;
  background-position: center 18%;
  width: 100%;
  max-width: 480px;
  min-width: min(100%, 220px);
  aspect-ratio: 2582 / 2414;
  height: auto;
  flex: 1 1 320px;
  align-self: center;
  border-radius: 18px;
  border: 1px solid rgba(250, 172, 168, 0.35);
  box-shadow: 0 16px 40px rgba(70, 48, 96, 0.14);
`

export const Emphasis = styled.span`
  color: #b85270;
  font-weight: 600;
  font-size: 1.05em;
  line-height: inherit;
`
export const Role = styled.span`
  color: #8d6174;
  font-size: 0.86em;
  font-weight: 500;
  line-height: inherit;
`

export const View = styled.a`
  text-decoration: none;
  cursor: pointer;
  pointer-events: all;
  color: #b85270;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  display: inline-block;
  margin-top: 0.85rem;
  border-bottom: 1px solid rgba(184, 82, 112, 0.45);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  :hover {
    color: #7d679c;
    border-bottom-color: #7d679c;
    transform: translateY(-1px);
  }
`
export const Navbar = styled.nav`
  z-index: 100;
  font-family: var(--font-heading), "Segoe UI", sans-serif;
  font-size: 0.98rem;
  font-weight: 600;
  font-synthesis: none;
  letter-spacing: 0.08em;
  position: fixed;
  width: fit-content;
  top: 18vh;
  left: max(20px, 4vw);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  @media (max-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    max-width: calc(100vw - 16px);
    align-items: center;
    justify-content: center;
    column-gap: 0.15rem;
    row-gap: 0;
    padding: 8px 12px;
    border-radius: 999px;
    ${glassSurface}
  }
  & p, a {
    text-decoration: none;
    cursor: pointer;
    color: #b85270;
    margin: 0;
    padding: 0.28rem 0.15rem;
    line-height: 1.3;
    border-radius: 6px;
    transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease;
    @media (max-width: 780px) {
      letter-spacing: 0.04em;
      font-size: 0.92rem;
      padding: 0.35rem 0.55rem;
    }
    @media (max-width: 420px) {
      font-size: 0.8rem;
      padding: 0.3rem 0.4rem;
    }
  }
  & p:hover, a:hover {
    transform: translateY(-2px);
    color: #7d679c;
  }
  & a:focus-visible, & p:focus-visible {
    outline: 2px solid #c47b93;
    outline-offset: 3px;
  }
`

export const RightMiddle = styled.div`
  position: absolute;
  font-family: var(--font-body), "Segoe UI", sans-serif;
  top: clamp(250px, 42vh, 480px);
  right: max(20px, 5vw);
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.55;
  width: min(34ch, 40vw);
  max-width: calc(100vw - 32px);
  text-align: right;
  z-index: 2;
  box-sizing: border-box;
  color: #5e516c;
  & b {
    font-weight: 600;
    color: #43384e;
  }
  @media (max-width: 780px) {
    position: relative;
    top: auto;
    right: auto;
    width: min(38ch, 100%);
    margin: 0.35rem auto 2rem;
    text-align: center;
    font-size: 1rem;
  }
`

export const Glass = styled.div`
  padding: 1.6rem clamp(1.1rem, 3vw, 2rem);
  width: min(460px, 100%);
  box-sizing: border-box;
  line-height: 1.65;
  font-size: 1.02rem;
  border-radius: 18px;
  ${glassSurface}
`

export const GlassCard = styled.div`
  pointer-events: auto;
  position: relative;
  margin: -4.25rem 12px 0;
  padding: 1.15rem 1.2rem 1.2rem;
  width: min(320px, calc(100% - 8px));
  box-sizing: border-box;
  border-radius: 16px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  ${glassSurface}
  & p {
    color: #5c5870;
    margin: 0.35rem 0 0;
  }
`

export const ArtGlassCard = styled.div`
  padding: 12px;
  width: min(280px, calc(100vw - 48px));
  box-sizing: border-box;
  border-radius: 18px;
  margin: 0;
  color: #6a657c;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  ${glassSurface}
  & img {
    border-radius: 12px;
    max-width: 100%;
    height: auto;
    display: block;
    transition: transform 0.45s ease;
  }
`

export const CardBody = styled.div`
  height: auto;
  & p {
    font-size: 0.95rem;
    line-height: 1.55;
  }
  & p:first-of-type {
    color: #a56d84;
    font-size: 0.78rem;
    letter-spacing: 0.045em;
    line-height: 1.4;
    margin-top: 0.45rem;
  }
  & p:first-of-type:empty {
    display: none;
  }
  & h1 {
    background: linear-gradient(105deg, #d86b84, #8d74b0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.28rem;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0;
    text-align: left;
    overflow-wrap: break-word;
  }
`

export const CardImage = styled.div`
  width: min(300px, 100%);
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  & div {
    width: 100%;
  }
  & img {
    border-radius: 16px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    opacity: 0.88;
    transition: transform 0.45s ease, opacity 0.45s ease;
  }
`

export const FlexContainerCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: min(1080px, calc(100% - 32px));
  margin: 0 auto;
  @media (min-width: 781px) {
    width: min(1080px, calc(90vw - 240px));
  }
  height: fit-content;
  box-sizing: border-box;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: min(340px, 100%);
  box-sizing: border-box;
  margin: 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
  &:hover img {
    opacity: 1;
    transform: scale(1.045);
  }
  &:hover ${GlassCard},
  &:hover ${ArtGlassCard} {
    box-shadow: 0 18px 42px rgba(70, 48, 96, 0.16);
  }
`

export const FlexContainerRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  gap: 28px 36px;
`
