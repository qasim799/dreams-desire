import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" w-full bg-base-300 p-5 items-center flex justify-between">
      <main>
        <span>Jawad Ka Kotha</span>
      </main>
      <ul className=" flex gap-4">
        <Link>Contact</Link>
        <Link>About</Link>
        <Link>Profile</Link>
      </ul>
    </header>
  );
};

export default Navbar;
