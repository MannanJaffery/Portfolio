export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const profile = {
  name: "Syed Muhammad Abdul Mannan",
  shortName: "Mannan",
  handle: "@mannanjaffery",
  title: "Full Stack & AI Engineer",
  location: "Islamabad, Pakistan",
  email: "abdulmannan5497@gmail.com",
  github: "MannanJaffery",
};

export const socials: SocialLink[] = [
  {
    name: "Github",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/MannanJaffery",
  },
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://www.linkedin.com/in/mannan-jaffery",
  },
  {
    name: "Gmail",
    icon: "/social/gmail.svg",
    href: `mailto:${profile.email}`,
  },
];
