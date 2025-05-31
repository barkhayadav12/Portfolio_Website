import './AboutMe.css'
const AboutMe = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="about-content">
        <p>
          I am Barkha Yadav, a final year student at NIT Manipur.
          Whenever possible, I love learning new technologies and developing new
          projects. I develop web applications mostly using the MERN stack, but
          I'm also exploring other technologies and frameworks that are
          interesting to me! Additionally, I am studying Mobile App Development.
          I am passionate about technology, and I love to contribute to the
          world of technology.
        </p>

        <h3 className="skills-title">Skills</h3>
        <div className="skills-grid">
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Reactjs</span>
          <span className="skill-tag">Node</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">Mongodb</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">Bootstrap</span>
          <span className="skill-tag">React Native</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
