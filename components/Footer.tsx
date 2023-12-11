import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex justify-center items-center mb-16">
      <Link href="https://shop.sappyseals.com" target="_blank">
        <Image src="/sappy_infinity.png" alt="sappy infinity" width={69} height={69} />
      </Link>
    </footer>
  );
};

export default Footer;
