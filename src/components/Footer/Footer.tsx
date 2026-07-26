import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUp,
} from "react-icons/fi";

import { AvailabilityPanel } from "./AvailabilityPanel";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="portfolio-footer"
      id="contact"
    >
      <div className="container footer-content">
        {/* <section
          className="footer-cta"
          aria-labelledby="footer-title"
        >
          <p className="footer-eyebrow">
            Let&apos;s build something great
          </p>

          <div className="footer-cta-layout">
            <div>
              <h2 id="footer-title">
                Have a project in mind?
                <br />
                Let&apos;s build it{" "}
                <span>together.</span>
              </h2>

              <p className="footer-description">
                I&apos;m always open to discussing new
                opportunities, collaborations or simply
                having a friendly conversation.
              </p>
            </div>

            <a
              className="footer-primary-action"
              href={`mailto:${contactDetails.email}`}
            >
              Start a conversation
              <FiSend aria-hidden="true" />
            </a>
          </div>
        </section> */}

        <div className="footer-network-grid">
          <AvailabilityPanel />
          <SocialLinks />
        </div>

        {/* <ContactDetails /> */}

        <div className="footer-bottom">
          <div className="footer-brand-row">
            <Link
              className="footer-brand"
              href="/"
              aria-label="Back to homepage"
            >
              <Image
                src="/images/brand/yb-logo.png"
                alt=""
                width={48}
                height={48}
              />
            </Link>

            <span>
              © {currentYear} Yassir Ben Boubker.
              All rights reserved.
            </span>
          </div>

          <p className="footer-made-with">
            Designed and built with
            <span aria-hidden="true">♥</span>
            and lots of coffee
            <span aria-hidden="true">☕</span>
          </p>

          <p className="footer-motto">
            Always learning. Always building. Always
            improving.
          </p>

          <a
            className="footer-back-to-top"
            href="#main-content"
          >
            Back to top
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}