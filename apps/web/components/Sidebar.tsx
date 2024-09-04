import Sidebarcomponent from "./Sidebarcomponent";
import { IoMenu } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="text-lg border-t-8 border-[#202225] w-3/12 bg-[#2f3136] text-center rounded-xl px-2 pb-2 h-screen">
      <div className="font-bold my-2">Menu</div>
      <Sidebarcomponent title="Practice Problems" Icon={IoMenu} />
      <Sidebarcomponent title="Quizzes" Icon={AiFillThunderbolt} />
      <Sidebarcomponent title="Stats" />
    </div>
  );
};

export default Sidebar;
