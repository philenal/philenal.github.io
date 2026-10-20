
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: clip;
    background:
      radial-gradient(900px 480px at 0% -10%, rgba(255, 255, 255, 0.7), transparent 60%),
      radial-gradient(700px 420px at 100% 0%, rgba(255, 214, 140, 0.45), transparent 55%),
      linear-gradient(180deg, #fff8dc 0%, #fff3c4 40%, #ffe7a3 100%);
    color: #3c3a38;
  }
  html {
    scroll-padding-top: 96px;
  }
  ::selection {
    background: #f6c7b6;
    color: #3c3a38;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
`;

const sectionHeading = `
  h1 {
    font-family: var(--font-heading), Georgia, serif;
    font-weight: 500;
    font-synthesis: none;
    font-size: clamp(3rem, 6vw, 4.6rem);
    line-height: 0.9;
    letter-spacing: -0.02em;
    color: #3c3a38;
    background: none;
    -webkit-text-fill-color: #3c3a38;
    text-align: left;
    margin: 0 0 22px;
    width: 100%;
  }
`

export const SiteContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  overflow-x: clip;
  font-family: var(--font-body), "Segoe UI", sans-serif;
  color: #3c3a38;
  & p {
    overflow-wrap: break-word;
    line-height: 1.55;
  }
`

export const CloudLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  & span {
    position: absolute;
    background: rgba(255, 253, 248, 0.78);
    border-radius: 50%;
  }
  & span:nth-child(1) {
    width: 220px;
    height: 78px;
    top: 120px;
    left: -40px;
    box-shadow: 70px 18px 0 10px rgba(255,253,248,0.7), 130px -8px 0 -6px rgba(255,253,248,0.65);
  }
  & span:nth-child(2) {
    width: 180px;
    height: 64px;
    top: 64%;
    right: -30px;
    box-shadow: -60px 10px 0 8px rgba(255,253,248,0.72);
  }
  & span:nth-child(3) {
    width: 140px;
    height: 48px;
    bottom: 8%;
    left: 8%;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  min-height: calc(100vh - 78px);
  min-height: calc(100dvh - 78px);
  box-sizing: border-box;
  padding: 18px 0 48px;
  @media (max-width: 860px) {
    width: min(1120px, calc(100% - 32px));
    min-height: 0;
    padding-top: 8px;
  }
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const HeroCopy = styled.div`
  & h1 {
    font-family: var(--font-heading), Georgia, serif;
    font-weight: 500;
    font-synthesis: none;
    font-size: clamp(3.4rem, 8vw, 7.1rem);
    line-height: 0.84;
    letter-spacing: -0.03em;
    color: #3c3a38;
    background: none;
    -webkit-text-fill-color: #3c3a38;
    margin: 0;
    text-align: left;
  }
  & svg {
    display: block;
    width: min(240px, 50%);
    height: 12px;
    margin: 12px 0 22px;
  }
  & p {
    margin: 0;
    font-size: 1.28rem;
    line-height: 1.35;
    color: #5e5850;
  }
  & b {
    display: block;
    color: #3c3a38;
    font-weight: 600;
  }
  & span {
    display: inline-block;
    margin-top: 10px;
    padding: 4px 12px 5px;
    border-radius: 999px;
    background: rgba(229, 107, 79, 0.16);
    color: #9a4332;
    font-weight: 500;
  }
  @media (max-width: 860px) {
    & h1 {
      font-size: clamp(3.2rem, 14vw, 4.6rem);
    }
  }
`

export const Swan = styled.img`
  width: min(520px, 100%);
  height: auto;
  display: block;
  justify-self: center;
  background: none;
  border: 0;
  filter: none;
  mix-blend-mode: normal;
  @media (max-width: 860px) {
    width: min(420px, 92%);
    order: -1;
    margin: 0 auto;
  }
`

export const SwanFeature = styled.button`
  display: block;
  width: min(440px, 86%);
  margin: 0 auto 8px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  & img {
    width: 100%;
    height: auto;
    display: block;
    filter: none;
    mix-blend-mode: normal;
  }
  &:focus-visible {
    outline: 2px solid #e56b4f;
    outline-offset: 4px;
    border-radius: 12px;
  }
`

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 74px;
`

export const Anchor = styled.div`
  scroll-margin-top: 88px;
`

const sectionBase = `
  width: 100%;
  box-sizing: border-box;
  padding: 28px 0 72px;
  ${sectionHeading}
`

export const AboutContainer = styled.div`
  ${sectionBase}
  height: auto;
  & li {
    font-size: 1rem;
    line-height: 1.55;
    margin: 0;
  }
`

export const ProjectsContainer = styled.div`
  ${sectionBase}
  height: auto;
`

export const Center = styled.div``
export const RightMiddle = styled.div``
export const CanvasWrap = styled.div``

export const Profile = styled.div`
  margin: 0;
  background-image: url('/profile.jpeg');
  background-size: cover;
  background-position: center 18%;
  width: min(340px, 100%);
  aspect-ratio: 1 / 1.08;
  flex: 0 0 auto;
  align-self: center;
  border-radius: 63% 37% 54% 46% / 42% 58% 46% 58%;
  box-shadow: 0 18px 36px rgba(90, 70, 30, 0.12);
  @media (max-width: 860px) {
    width: min(168px, 52%);
  }
`

export const Emphasis = styled.span`
  color: #9a4332;
  font-weight: 600;
  line-height: inherit;
`
export const Role = styled.span`
  color: #6e6848;
  font-weight: 500;
  line-height: inherit;
`

export const View = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #9a4332;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  display: inline-block;
  margin-top: 0.85rem;
  border-bottom: 1px solid rgba(229, 107, 79, 0.45);
  &:hover {
    color: #6e6848;
    border-bottom-color: #6e6848;
  }
`

export const Navbar = styled.nav`
  z-index: 20;
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2px;
  width: max-content;
  max-width: calc(100vw - 16px);
  padding: 6px 8px 6px 14px;
  background: rgba(255, 253, 248, 0.88);
  border: 1px solid rgba(60, 58, 56, 0.1);
  border-radius: 999px;
  backdrop-filter: blur(10px);
  font-family: var(--font-body), "Segoe UI", sans-serif;
  font-size: 0.92rem;
  letter-spacing: 0.06em;
  & p, & a {
    text-decoration: none;
    cursor: pointer;
    color: #5e5850;
    margin: 0;
    padding: 8px 12px;
    line-height: 1.2;
    border-radius: 999px;
  }
  & p:hover, & a:hover {
    color: #3c3a38;
  }
  & a {
    background: #3c3a38;
    color: #fff8e8;
    margin-left: 6px;
    font-weight: 600;
  }
  & a:hover {
    color: #fff8e8;
  }
  & a:focus-visible, & p:focus-visible {
    outline: 2px solid #e56b4f;
    outline-offset: 3px;
  }
  @media (max-width: 420px) {
    padding-left: 8px;
    & p, & a {
      padding: 8px;
      font-size: 0.82rem;
      letter-spacing: 0.03em;
    }
  }
`

export const Glass = styled.div`
  padding: 26px 28px 16px;
  width: min(640px, 100%);
  box-sizing: border-box;
  line-height: 1.55;
  font-size: 1.08rem;
  border-radius: 28px;
  background: rgba(255, 253, 248, 0.82);
  border: 1px solid rgba(60, 58, 56, 0.1);
  box-shadow: 0 16px 36px rgba(90, 70, 30, 0.07);
  flex: 1 1 320px;
  & ul {
    list-style: none;
    margin: 8px 0 10px;
    padding: 0;
  }
  & li {
    position: relative;
    padding: 10px 0 10px 18px;
    border-top: 1px solid rgba(60, 58, 56, 0.07);
  }
  & li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 18px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e56b4f;
  }
  @media (max-width: 860px) {
    padding: 16px 16px 8px;
    font-size: 0.98rem;
  }
`

export const GlassCard = styled.div`
  pointer-events: auto;
  position: relative;
  margin: 0;
  padding: 16px 18px 18px;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  & p {
    color: #5e5850;
    margin: 8px 0 0;
  }
`

export const ArtOpenButton = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  & img {
    width: 100%;
    height: auto;
    display: block;
  }
  &:focus-visible {
    outline: 2px solid #e56b4f;
    outline-offset: -4px;
  }
`

export const ArtLightboxBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 20px 24px;
  box-sizing: border-box;
  background: rgba(60, 58, 56, 0.72);
  cursor: pointer;
`

export const ArtLightboxFigure = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  cursor: default;
`

export const ArtLightboxImage = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: min(1100px, 92vw);
  max-height: calc(100vh - 88px);
  max-height: calc(100dvh - 88px);
  object-fit: contain;
  border-radius: 18px;
  background: #fffdf8;
  box-shadow: 0 24px 60px rgba(40, 30, 10, 0.35);
`

export const ArtLightboxClose = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 41;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(60, 58, 56, 0.12);
  background: rgba(255, 253, 248, 0.94);
  color: #3c3a38;
  font: 500 1.6rem/1 var(--font-body), "Segoe UI", sans-serif;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid #e56b4f;
    outline-offset: 3px;
  }
`

export const CardBody = styled.div`
  height: auto;
  & p {
    font-size: 0.95rem;
    line-height: 1.55;
  }
  & p:first-of-type {
    color: #6e6848;
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    line-height: 1.4;
    margin-top: 0.45rem;
  }
  & p:first-of-type:empty {
    display: none;
  }
  && h1 {
    font-family: var(--font-heading), Georgia, serif;
    font-weight: 600;
    font-size: 1.55rem;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0;
    text-align: left;
    color: #3c3a38;
    background: none;
    -webkit-text-fill-color: #3c3a38;
    overflow-wrap: anywhere;
  }
`

export const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  background: #fff6d8;
  & img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 188px;
    object-fit: cover;
    display: block;
    border-radius: 0;
    opacity: 1;
  }
`

export const FlexContainerCol = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  height: fit-content;
  box-sizing: border-box;
  @media (max-width: 860px) {
    width: min(1120px, calc(100% - 32px));
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: auto;
  box-sizing: border-box;
  margin: 0;
  background: rgba(255, 253, 248, 0.92);
  border: 1px solid rgba(60, 58, 56, 0.1);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 14px 30px rgba(90, 70, 30, 0.08);
  flex: 1 1 320px;
  max-width: calc(50% - 14px);
  @media (max-width: 860px) {
    max-width: 100%;
  }
`

export const FlexContainerRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  gap: 22px;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ArtContainer = styled.div`
  ${sectionBase}
  height: auto;
  ${FlexContainerRow} {
    flex-direction: row;
    align-items: flex-start;
  }
  ${CardContainer} {
    flex: 1 1 200px;
    max-width: calc(33.33% - 16px);
  }
  @media (max-width: 860px) {
    ${CardContainer} {
      max-width: calc(50% - 12px);
    }
  }
`
