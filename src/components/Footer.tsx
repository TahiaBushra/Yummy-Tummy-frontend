import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-pink-500 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between container mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Yummy😋Tummy
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-xl font-bold">
            Privacy
          </Link>
          <Link href="/about" className="text-xl font-bold">
            About
          </Link>
          <Link href="/concact" className="text-xl font-bold">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-md font-bold">
          Designed with ❤️ by Yummy😋Tummy team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
