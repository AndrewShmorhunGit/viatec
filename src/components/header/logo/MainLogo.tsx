import Image from "next/image";

export function MainLogo({ props }: { props: any }) {
  return (
    <Image
      src="https://viatec.ua/img/header/logo.svg"
      alt={"Main Logo"}
      width={140}
      height={60}
    />
  );
}
