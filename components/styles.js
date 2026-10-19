
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'aqua';
    src: url('/fonts/aqua.ttf');
    font-weight: 600;
    font-style: normal;
    }
  html, body {
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: clip;
  }
  html {
    scroll-padding-top: 96px;
  }
  h1 {
    scroll-margin-top: 96px;
  }
`;

export const SiteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow-x: clip;
  & h1 {
    background: #ddd6f3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #faaca8, #ddd6f3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #faaca8, #ddd6f3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.05;
    /* Fit the wordmark between the side nav and the viewport edge. */
    font-size: clamp(2.75rem, calc((88vw - 300px) / 6.1), 10.5rem);
    @media (max-width: 780px) {
      font-size: clamp(2.5rem, calc((100vw - 40px) / 6.1), 7.25rem);
    }
  }
  & p {
    overflow-wrap: break-word;
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }

`

export const Container = styled.div`
  font-family: 'aqua';
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  color: white;
  box-sizing: border-box;
  padding: 0 16px 2.5rem;
  @media (max-width: 780px) {
    padding-top: 76px;
  }
  & h1 {
    padding: 0 0.04em;
    font-weight: 600;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'aqua';
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  overflow: hidden;
  & p {
    color: #e1d0e9;
  }
  & h1 {
    padding: 0 0.06em;
    font-weight: 600;
    white-space: nowrap;
    line-height: 1.05;
    margin: 0.45em auto 0.25em;
    width: max-content;
    max-width: calc(100% - 8px);
    position: relative;
    z-index: 2;
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

export const AboutContainer = styled.div`
  font-family: 'aqua';
  min-height: 100vh;
  min-height: 100dvh;
  height: auto;
  width: 100%;
  color: #b5b5c8;
  box-sizing: border-box;
  padding-bottom: 4rem;
  & h1 {
    padding: 0 12px;
    margin: 0.15em 0 0.25em 0;
    font-weight: 600;
  }
  & li {
    font-size: 14px;
    line-height: 1.7;
    margin: 0 0 0.85em;
  }
`

export const ProjectsContainer = styled.div`
  font-family: 'aqua';
  height: fit-content;
  width: 100%;
  color: white;
  box-sizing: border-box;
  padding-bottom: 2rem;
  & h1 {
    padding: 0 12px;
    margin: 0.15em 0 0.4em 0;
    font-weight: 600;
  }
`
export const ArtContainer = styled.div`
  font-family: 'aqua';
  height: fit-content;
  width: 100%;
  color: white;
  box-sizing: border-box;
  padding-bottom: 4rem;
  & h1 {
    padding: 0 12px;
    margin: 0.15em 0 0.35em 0;
    font-weight: 600;
  }
`

export const Center = styled.div`
text-align: center;
`

export const Profile = styled.div`
  margin: 20px;
  background-image: url('/profile.jpeg');
  background-size: cover;
  background-position: center top;
  width: 100%;
  max-width: 520px;
  min-width: min(100%, 220px);
  aspect-ratio: 2582 / 2414;
  height: auto;
  flex: 1 1 340px;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
`

export const Emphasis = styled.span`
  color: #eebdc7;
  font-size: 20px;
  line-height: 1.35;
`
export const Role = styled.span`
  color: #eebdc7;
  font-size: 12px;
  line-height: 1.35;
`

export const View = styled.a`
  text-decoration: none;
  cursor: pointer;
  pointer-events: all;
  color: #eebdc7;
  font-size:14px;
  transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;
  :hover {
    color: #ddd6f3;
    font-size: 15px;
  }
`
export const Navbar = styled.div`
  z-index: 100;
  font-family: 'aqua';
  font-size: 20px;
  position: fixed;
  width: fit-content;
  top: 20vh;
  left: 5vw;
  line-height: 2em;
  text-align: left;
  font-weight: 600;
  display: flex;
  flex-direction: column;
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
    column-gap: 4px;
    row-gap: 2px;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
  }
  & p, a {
    text-decoration: none;
    cursor: pointer;
    color: #eebdc7;
    transition: transform, color 0.5s ease-in-out;
    @media (max-width: 780px) {
      line-height: 1.2;
      font-size: 15px;
      margin: 6px 8px;
    }
    @media (max-width: 420px) {
      font-size: 13px;
      margin: 4px 6px;
    }
  }
  & p:hover, a:hover {
    transform: translateY(-4px);
    color: #ddd6f3;
  }
  
`

export const RightMiddle = styled.div`
  position: absolute;
  font-family: 'aqua';
  top: clamp(230px, 40vh, 480px);
  right: max(16px, 5vw);
  font-weight: 300;
  font-size: 20px;
  width: min(35ch, 42vw);
  max-width: calc(100vw - 32px);
  text-align: right;
  z-index: 2;
  box-sizing: border-box;
  @media (max-width: 780px) {
    position: relative;
    top: auto;
    right: auto;
    width: min(42ch, 100%);
    margin: 0.25rem auto 1.5rem;
    text-align: center;
    font-size: 16px;
  }
`

export const Glass = styled.div`
  padding: 32px clamp(18px, 4vw, 40px);
  width: min(430px, 100%);
  box-sizing: border-box;
  line-height: 1.55;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 10px;
`

export const GlassCard = styled.div`
  pointer-events: none;
  position: relative;
  top: -200px;
  margin-bottom: -160px;
  left: 0px;
  padding: 20px clamp(16px, 3vw, 36px);
  width: min(340px, 100%);
  box-sizing: border-box;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 12px;
  & p {
    color: #b5b5c8;
  }
`

export const ArtGlassCard = styled.div`
  pointer-events: none;
  padding: 20px 20px;
  width: min(300px, calc(100vw - 48px));
  box-sizing: border-box;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 12px );
  -webkit-backdrop-filter: blur( 12px );
  border-radius: 10px;
  margin: 16px;
  color: #8c8ba2;
  & img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }
`

export const CardBody = styled.div`
  height: auto;
  margin-top: 12px;
  & p {
    font-size: 16px;
    line-height: 1.45;
  }
  & h1 {
    background: #faaca8; 
    
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    font-size: 24px;
    line-height: 1.25;
    overflow-wrap: break-word;
  }
`

export const CardImage = styled.div`
width: min(300px, 100%);
margin: 0 auto;
& div {
  width: 100%;
}
& img {
  border-radius: 10px;
  position: relative;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  opacity: .3;
  transition: top ease 0.7s, opacity ease .7s;
}
@media (min-width: 900px) {
  & img {
    left: 36px;
  }
}

& div:hover {
  img {
    opacity: 1;
    top:-160px;
  }
}
`

export const FlexContainerCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  width: min(1080px, calc(100% - 32px));
  margin: 0 auto;
  @media (min-width: 781px) {
    /* Stay clear of the fixed left nav while remaining centered. */
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
  width: min(380px, 100%);
  box-sizing: border-box;
  margin: 0 0 24px;
`

export const FlexContainerRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`