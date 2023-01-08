import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Aboutme from "./Pages/Aboutme";
import Letswork from "./Pages/Letswork";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import AdminHome from "./Admin/Pages/AdminHome";
import AdminBlog from "./Admin/Pages/AdminBlog";
import AddBlog from "./Admin/Pages/AddBlog";
import { useContext } from "react";
import { ThemeManager } from "./Context/ThemeManager";


function App() {

  const { darkMode, setDarkMode } = useContext(ThemeManager);

  

  return (
    <div className="App">
      <Router>
        {/* <Navbar1 /> */}

        <Routes>
          <Route path="/" element={<Home type="home" />} />
          <Route path="/" element={<Home type="home" />} />
          <Route path="/aboutme" element={<Aboutme type="about" />} />
          <Route path="/portfolio" element={<Letswork type="letswork" />} />
          <Route path="/services" element={<Services type="services" />} />
          {/* <Route path="/blogs" type="blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetails />} />
          </Route> */}
          <Route path="/contact" element={<Letswork type="contact" />} />

          <Route path="/admin">
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="/allblogs" element={<AdminBlog />} /> 
          <Route path="/addblog" element={<AddBlog />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
