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
import type { Dictionary } from "@/i18n/dictionaries";

const socialIcons: Record<
  SocialLinkId,
  IconType
> = {
  github: FiGithub,
  "github-yassirbb": FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  whatsapp: FaWhatsapp
};

export function SocialLinks({ copy }: { copy: Dictionary["footer"] }) {
  return (
    <section
      className="footer-social"
      aria-labelledby="footer-social-title"
    >
      <h2 id="footer-social-title">
        {copy.connectTitle}
      </h2>

      <p className="footer-panel-description">
        {copy.connectDescription}
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
