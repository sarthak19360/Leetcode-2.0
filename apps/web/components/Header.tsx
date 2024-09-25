import HeaderElement from "@repo/ui/headerElement";
import { BsRocketFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex px-5 py-4 bg-[#2f3136] text-white justify-between ">
      <div className="flex">
        <Link href="/">
          <BsRocketFill className="mx-3 text-4xl font-bold hover: py-1 px-2 rounded-full cursor-pointer" />
        </Link>
        <HeaderElement text="Courses" path="/" />
        <HeaderElement text="Practice" path="/problems" />
        <HeaderElement text="Roadmap" path="/" />
      </div>
      <div className="flex">
        <HeaderElement text="Pro" path="/" />
        <FaUserCircle className="mx-3 text-4xl font-bold hover: py-1 px-2 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
