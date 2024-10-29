import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-black p-6">
        <span className="text-4xl text-white font-mono">Umair Institute</span>
        <div className="float-right">
          <Link
            href="/"
            className="ml-0 p-2  text-xl bg-blue-400 border-2 rounded-2xl transition-all duration-500 hover:bg-blue-950 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="ml-1 p-2 text-xl bg-blue-400 border-2 rounded-2xl transition-all duration-500 hover:bg-blue-950 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="ml-1 p-2 text-xl bg-blue-400 border-2 rounded-2xl transition-all duration-500 hover:bg-blue-950 hover:text-white"
          >
            Contact-Us
          </Link>

          <Link
            href="/courses"
            className="ml-1 p-2 text-xl bg-blue-400 border-2 rounded-2xl transition-all duration-500 hover:bg-blue-950 hover:text-white"
          >
            Courses
          </Link>
        </div>
      </nav>
    </div>
  );
}
