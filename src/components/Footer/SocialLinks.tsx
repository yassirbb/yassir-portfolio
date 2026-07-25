import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import {
  socialLinks,
  type SocialLinkId
} from "@/data/contact";

const socialIcons: Record<
  SocialLinkId,
  IconType
> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  whatsapp: FaWhatsapp
};

export function SocialLinks() {
  return (
    <section
      className="footer-social"
      aria-labelledby="footer-social-title"
    >
      <h2 id="footer-social-title">
        Let&apos;s connect
      </h2>

      <p className="footer-panel-description">
        Follow my work, learning journey and professional
        progress.
      </p>

      <div
        className="footer-social-links"
        aria-label="Social links"
      >
        {socialLinks.map((socialLink) => {
          const SocialIcon =
            socialIcons[socialLink.id];

          return (
            <a
              key={socialLink.id}
              href={socialLink.href}
              aria-label={socialLink.label}
              target={
                socialLink.external
                  ? "_blank"
                  : undefined
              }
              rel={
                socialLink.external
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <SocialIcon aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}