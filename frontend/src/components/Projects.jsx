import './Projects.css';
import ecopulse from '../images/ecopulse.jpg';
import home4paws from '../images/home4paws.jpg';
import codehelp from '../images/codehelp.png';

const projects = [
  {
    title: "Eco Pulse",
    description:
      "Eco Pulse is a civic-focused web platform that enables users to report waste dump areas in their city. Admins can assign cleanup teams based on reports, while users can also recycle waste through the platform—encouraging cleaner and greener cities.",
    image: ecopulse,
    github: "https://github.com/barkhayadav12/Eco---Pulse",
  },
  {
    title: "Home4Paws",
    description:
      "Home4Paws is a pet adoption and emergency assistance platform. Pet owners who are busy and not able to take care of their pets can list them for adoption, and others can adopt. It also allows users to report pet-related emergencies to get timely help for animals in distress.",
    image: home4paws,
    github: "https://github.com/barkhayadav12/Home4Paws",
  },
  {
    title: "Code Help",
    description:
      "Code Help is a developer support portal where users can ask coding-related doubts, get answers, and write or read articles on programming topics. It's a collaborative space for learning and sharing coding knowledge.",
    image: codehelp,
    github: "https://github.com/barkhayadav12/CodeHelp",
  },
];

export default function Projects() {
  return (
    <section className="projects-wrapper">
      <h1 className="projects-header">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-content">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
