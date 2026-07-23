import { featuredProjects } from '../../../data/projects';

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="featured-projects-title" className="card">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured-projects-title">Featured projects</h2>
      </div>
      <div className="project-list">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="meta">{project.stack}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
