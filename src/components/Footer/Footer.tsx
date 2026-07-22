export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} Yassir Ben Boubker. All rights
          reserved.
        </p>

        <p>
          Always learning. Always building. Always improving.
        </p>
      </div>
    </footer>
  );
}