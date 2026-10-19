import { Container, HeroGrid, HeroCopy, Swan } from './styles'

export default function OverlayHome() {
  return (
    <Container>
      <HeroGrid>
        <HeroCopy>
          <h1>philena liu</h1>
          <svg viewBox="0 0 240 12" aria-hidden="true">
            <path d="M2 8 C 40 2, 90 11, 140 6 S 200 9, 238 4" stroke="#e56b4f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
          <p>
            <b>mit 2024</b>
            <b>cs</b>
            <span>web dev + art</span>
          </p>
        </HeroCopy>
        <Swan src="/Cloud-Swan.png" alt="handmade swan drawing" />
      </HeroGrid>
    </Container>
  )
}
