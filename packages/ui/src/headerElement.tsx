import Link from "next/link";
const headerElement = ({ text, path }: { text: string; path: string }) => {
  return (
    <>
      <Link href={path}>
        <div className="mx-3 font-bold hover:bg-black py-1 px-2 rounded-full cursor-pointer">
          {text}
        </div>
      </Link>
    </>
  );
};

export default headerElement;
