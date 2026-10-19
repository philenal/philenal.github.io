import { Navbar } from './styles'

export default function NavBar(props) {
  const { homeRef, aboutRef, projectsRef, artRef } = props;
  const executeScroll = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }
  const onKey = (event, ref) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      executeScroll(ref)
    }
  }
  const item = (label, ref) => (
    <p
      role="button"
      tabIndex={0}
      onClick={() => executeScroll(ref)}
      onKeyDown={(event) => onKey(event, ref)}
    >
      {label}
    </p>
  )
  return (
    <Navbar aria-label="Site">
        {item('home', homeRef)}
        {item('about', aboutRef)}
        {item('projects', projectsRef)}
        {item('art', artRef)}
        <a href={`/resume.pdf`}>resume</a>
    </Navbar>
  )
}
