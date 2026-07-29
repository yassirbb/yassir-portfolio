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

export function SocialLinks({
  copy,
  common
}: {
  copy: Dictionary["footer"];
  common: Dictionary["common"];
}) {
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

      <nav
        className="footer-social-links"
        aria-label={copy.socialLinksLabel}
      >
        {socialLinks.map((socialLink) => {
          const SocialIcon =
            socialIcons[socialLink.id];

          return (
            <a
              key={socialLink.id}
              href={socialLink.href}
              aria-label={
                socialLink.external
                  ? `${socialLink.label} (${common.opensInNewTab})`
                  : socialLink.label
              }
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
      </nav>
    </section>
  );
}
