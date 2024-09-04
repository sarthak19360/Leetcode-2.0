import HeaderElement from "@repo/ui/headerElement";
const Header = () => {
  return (
    <div className="flex px-5 py-4 bg-[#2f3136] text-white justify-between ">
      <div className="flex">
        <HeaderElement text="Icon" />
        <HeaderElement text="Courses" />
        <HeaderElement text="Practice" />
        <HeaderElement text="Roadmap" />
      </div>
      <div className="flex">
        <HeaderElement text="Pro" />
        <HeaderElement text="Icon" />
        <HeaderElement text="Logo" />
      </div>
    </div>
  );
};

export default Header;
