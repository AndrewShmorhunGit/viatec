import { links } from "data/static";
import Link from "next/link";

export function FooterLinks() {
  return (
    <div className="d-flex gap-4">
      {links.map(({ icon, link }) => {
        return (
          <Link
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
