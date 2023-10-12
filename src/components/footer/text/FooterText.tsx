import { content, year } from "data/static";

export function FooterText() {
  return <p className="fs-6"> &copy; {content + " " + year}</p>;
}
