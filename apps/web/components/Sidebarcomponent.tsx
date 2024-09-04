import { IconType } from "react-icons";

const Sidebarcomponent = ({
  title,
  Icon,
}: {
  title: string;
  Icon?: IconType;
}) => {
  return (
    <div className="bg-black rounded-md my-3 p-4 cursor-pointer">
      <div className="font-bold">{title}</div>
      {Icon && <Icon className="mt-3 text-3xl mx-auto" />}
    </div>
  );
};

export default Sidebarcomponent;
