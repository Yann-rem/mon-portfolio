import { FC, useRef } from "react";

const navLinks: { href: string; text: string }[] = [
  { href: "#home", text: "accueil" },
  { href: "#about", text: "à propos" },
  { href: "#skills", text: "compétences" },
  { href: "#projects", text: "projets" },
  { href: "#contact", text: "contact" },
] as const;

const Navbar: FC = () => {
  console.debug("[Rendu] composant 'Navbar'");

  const navLinkRefs = useRef<HTMLLIElement[]>([]);

  return (
    <header>
      <nav>
        <div>
          <ul>
            {navLinks.map(({ href, text }, index) => (
              <li
                key={index}
                ref={(el) => {
                  navLinkRefs.current[index] = el!;
                }}
              >
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
