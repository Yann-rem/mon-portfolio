import { FC, useRef } from "react";

import { Logo } from "./Icon";

const navLinks: { href: string; text: string }[] = [
  { href: "#home", text: "accueil" },
  { href: "#about", text: "à propos" },
  { href: "#skills", text: "compétences" },
  { href: "#projects", text: "projets" },
] as const;

const Navbar: FC = () => {
  console.debug("[Rendu] composant 'Navbar'");

  const navLinksRefs = useRef<HTMLLIElement[]>([]);

  return (
    <header className="navbar">
      <nav className="container-custom">
        <a href="#" className="navbar__logo-wrapper">
          <Logo className="navbar__logo" />
        </a>
        <ul className="navbar__nav">
          {navLinks.map(({ href, text }, index) => (
            <li
              key={index}
              ref={(el) => {
                navLinksRefs.current[index] = el!;
              }}
            >
              <a href={href} className="navbar__nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__action">
          <a href="#" className="navbar__contact-btn">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
