import Image from "next/image";
import Link from "next/link";

import type {
  Project,
} from "@/data/projects";

export function ProjectCard({
  slug,
  title,
  description,
  image
}: Project) {
  const projectHref = `/projects/${slug}`;

  return (
    <article className="project-card">
      <Link
        className="project-card-image-link"
        href={projectHref}
        aria-label={`View ${title} project`}
      >
        <Image
          className="project-card-image"
          src={image.src}
          alt={image.alt}
          width={720}
          height={405}
        />
      </Link>

      <div className="project-card-content">
        <h3>
          <Link href={projectHref}>
            {title}
          </Link>
        </h3>

        <p>{description}</p>

        <footer className="project-card-footer">
          <Link
            className="project-card-action"
            href={projectHref}
            aria-label={`Open ${title} project`}
          >
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}