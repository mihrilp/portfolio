import { Ufo, VulcanSalute } from "./icons";
import Link from "next/link";
import NavItem from "./NavItem";

const navbarItems = [
  {
    id: 1,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 2,
    name: "Work",
    url: "/projects",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-16">
      <div className="basis-3/4 flex items-center justify-start">
        <Link href="/" passHref>
          <Ufo />
        </Link>
        {navbarItems.map((item) => (
          <NavItem key={item.id} href={item.url} pageName={item.name} />
        ))}
      </div>
      <a
        className="basis-1/4 flex items-center justify-end text-yellow text-lg py-2"
        href="mailto: mihrilp@gmail.com"
      >
        Let&apos;s Meet <VulcanSalute />
      </a>
    </nav>
  );
}
