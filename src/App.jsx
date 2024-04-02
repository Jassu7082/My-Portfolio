import Navbar from "./components/Navbar/DNavbar.jsx"
import Header from "./components/Home/Header.jsx"
import About from "./components/about/about.jsx"
import TechnologiesContainer from "./components/tech/tech.jsx"
import Project from "./components/project/project.jsx"
import ToolContainer from "./components/tech/tools.jsx"
import SocialContainer from "./components/contact/social.jsx"
import Contact from "./components/contact/contact.jsx"
import ContactFooter from "./components/footer/footer.jsx"
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
