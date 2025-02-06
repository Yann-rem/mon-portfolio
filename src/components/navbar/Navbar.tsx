import { FC, useRef } from "react";

const navLinks: { href: string; text: string }[] = [
  { href: "#home", text: "accueil" },
  { href: "#about", text: "à propos" },
  { href: "#skills", text: "compétences" },
  { href: "#projects", text: "projets" },
] as const;

const Navbar: FC = () => {
  console.debug("[Rendu] composant 'Navbar'");

  const navLinkRefs = useRef<HTMLLIElement[]>([]);

  return (
    <header>
      <nav>
        <a href="#">logo</a>
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
        <div>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
