const headerElement = ({ text }: { text: string }) => {
  return (
    <div className="mx-3 font-bold hover:bg-black py-1 px-2 rounded-full cursor-pointer">
      {text}
    </div>
  );
};

export default headerElement;
