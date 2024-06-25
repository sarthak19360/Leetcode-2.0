import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";

const Appbar = () => {
  return (
    <div className="flex justify-between px-5 py-5 bg-black text-white">
      <div className="text-xl hover:cursor-pointer">
        <Link href="/">Leetcode</Link>
      </div>
      <div className="text-lg hidden md:block">
        <ul className="flex">
          <li className="mx-4 hover:cursor-pointer hover:text-gray-400">
            <Link href="/problems">Problems</Link>
          </li>
          <li className="mx-4 hover:cursor-pointer hover:text-gray-400">
            <Link href="/core">Core</Link>
          </li>
          <li className="mx-4 hover:cursor-pointer hover:text-gray-400">
            <Link href="/standings">Standings</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
          <MdOutlineLightMode className="text-xl my-auto" />
        </button>
        <button className="mx-7 text-lg">Signin</button>
      </div>
    </div>
  );
};

export default Appbar;
