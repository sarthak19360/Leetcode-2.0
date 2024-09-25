import Editor from "../../../components/Editor";
import ProblemDescription from "../../../components/ProblemDescription";

const page = () => {
  return (
    <div className="flex h-[95vh] text-white bg-[#2c2f36] border-t-[1px]">
      <ProblemDescription />
      <Editor />
    </div>
  );
};

export default page;
