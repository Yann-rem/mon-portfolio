import { FC, SVGProps } from "react";

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M 0.50472218,1.5624293e-6 9.6805028,15.355469 c 0.202526,0.33899 0.3105487,0.728168 0.3105487,1.123047 V 24 h 6.4960915 v -7.521484 c 1e-6,-1.568421 -0.420199,-3.104744 -1.224609,-4.451172 L 8.0769874,1.5624293e-6 Z"
      fill="currentColor"
    />
    <circle cx="20.245277" cy="3.2499993" r="3.25" fill="currentColor" />
  </svg>
);
