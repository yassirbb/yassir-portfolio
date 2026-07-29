import Image from "next/image";
import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";

import {
  localizePath,
  type Locale
} from "@/i18n/config";
import { paths } from "@/config/paths";
import type { Dictionary } from "@/i18n/dictionaries";
import { AvailabilityPanel } from "./AvailabilityPanel";
import { SocialLinks } from "./SocialLinks";

const currentYear = new Date().getFullYear();

export function Footer({
  locale,
  copy
}: {
  locale: Locale;
  copy: Dictionary["footer"];
}) {
  return (
    <footer className="portfolio-footer" id="contact">
      <div className="container footer-content">
        <div className="footer-network-grid">
          <AvailabilityPanel copy={copy} />
          <SocialLinks copy={copy} />
        </div>

        <div className="footer-bottom">
          <div className="footer-brand-row">
            <Link
              className="footer-brand"
              href={localizePath(locale)}
              aria-label={copy.backToTop}
            >
              <Image src={paths.images.logo} alt="" width={48} height={48} />
            </Link>
            <span>
              © {currentYear} Yassir Ben Boubker. {copy.rights}
            </span>
          </div>

          <p className="footer-made-with">
            {copy.madeWith}
            <span aria-hidden="true">♥</span>
            {copy.coffee}
            <span aria-hidden="true">☕</span>
          </p>
          <p className="footer-motto">{copy.motto}</p>
          <a className="footer-back-to-top" href={paths.anchors.mainContent}>
            {copy.backToTop}
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
