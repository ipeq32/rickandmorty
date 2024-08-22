import Image from "next/image";
import Link from "next/link";

function NavbarComponent() {
  return (
    <nav className="flex justify-between items-center gap-5 w-full h-24 px-5 shadow-md shadow-slate-200 sticky top-0 z-50 backdrop-blur-md bg-sky-300/70">
      <Link href="/" className="relative w-60 h-full">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="cursor-pointer hover:scale-95"
        />
      </Link>
      <ul className="flex gap-5">
        <li>
          <Link href="/" className="hover:opacity-60">
            Contact
          </Link>
        </li>
        <li>
          <a href="/" className="hover:opacity-60">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
