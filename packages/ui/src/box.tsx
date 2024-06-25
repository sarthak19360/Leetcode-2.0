"use client";
export const Box = ({
  children,
  isClicked,
  className,
}: {
  children: React.ReactNode;
  isClicked: Boolean;
  className?: string;
}) => {
  return (
    <button
      className={
        className +
        "bg-slate-400 text-white flex justify-center p-3 rounded-md mr-2"
      }
    >
      {children}
    </button>
  );
};

Box.defaultProps = {
  isClicked: false,
};
