import Link from "next/link";

const Navbar = () => (
  <nav className="mb-20">
    <div className="mx-auto container flex items-center justify-between py-4">
      <Link href="/">
        <h1 className="text-neutral-900 font-bold antialiased text-2xl">
          TodoList
        </h1>
      </Link>
      <div className="flex gap-4">
        <Link href="/signin" className="block">
          <p className="text-neutral-600 font-medium text-md antialiased">
            Signin
          </p>
        </Link>
        <Link href="/signup" className="block">
          <p className="text-neutral-600 font-medium text-md antialiased">
            Signup
          </p>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
