import uncrypt from '../../images/uncrypt.png';
function Projects() {
  return (
    <div className="projects-container">
      <h2 className="subheading">Projects</h2>
      <div className="projects">
        <a
          href="http://uncrypt.app"
          target="_blank"
          rel="noreferrer"
          className="project">
          Uncrypt – Crypto wallet tracker.
        </a>
      </div>
    </div>
  );
}

export default Projects;
