import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Project from "./Pages/Project"
import './app.css'
import Practice from "./Pages/Practice"
import first from '../src/assets/body.jpg'
import ServiceDetail from "./Pages/ServiceDetail"
import Service from "./Pages/Service"
import Team from "./Pages/Team"
import TeamDetail from "./Pages/TeamDetail"
import ProjectDetail from "./Pages/ProjectDetail"
import AboutUs from "./Pages/AboutUs"
import ExpandedBlog from "./Pages/ExpandedBlog"
import Blog from "./Pages/Blog"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetail />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project-details" element={<ProjectDetail />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/team-details" element={<TeamDetail />} />
          <Route path="/about-uss" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-expandeds" element={<ExpandedBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Service/> */}
    </>
  )
}

export default App
