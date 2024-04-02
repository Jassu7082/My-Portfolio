import Navbar from "./DNavbar.jsx"
import Header from "./Header.jsx"
import About from "./about.jsx"
import TechnologiesContainer from "./tech.jsx"
import Project from "./project.jsx"
import ToolContainer from "./tools.jsx"
import SocialContainer from "./social.jsx"
import Contact from "./contact.jsx"
import ContactFooter from "./footer.jsx"
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <TechnologiesContainer/>
      <ToolContainer/>
      <Contact/>
      <SocialContainer/>
      <ContactFooter/>
    </>
  )
}

export default App
