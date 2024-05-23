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
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-detail" element={<TeamDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-expanded" element={<ExpandedBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Service/> */}
    </>
  )
}

export default App
