import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import './Intro.css'
function Intro() {
  return (
    <>
    <div className="page-container">
      <div className="container">
        <div className="bio">
          <h1>Hello, I am Barkha.</h1>
          <p>
            MERN stack & React Native developer crafting fast, full-stack web and mobile apps.
            Passionate about building elegant solutions with clean code and seamless UX.
          </p>
          <p>
            Get in touch <a href="mailto:barkhayadav125@gmail.com">barkhayadav125@gmail.com</a>
          </p>
        </div>

        <div className="social-links">
          <a href="https://github.com/barkhayadav12">👨‍💻 Github</a>
          <a href="https://www.linkedin.com/in/barkhayadav/">🔵 LinkedIn</a>
        </div>
      </div>

      <footer className="footer">
        <Link to='/projects'>Projects →</Link>
        <Link to="/about">About me →</Link>
      </footer>
    </div>
    <AboutMe/>
   <div className="projects-section">
  <Projects />
</div>
    </>
  );
}

export default Intro