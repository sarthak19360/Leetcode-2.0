import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
const ProblemLink = ({
  id,
  isSolved,
  title,
  difficulty,
  examples,
}: {
  id: number;
  isSolved: boolean;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  examples: {}[];
}) => {
  return (
    <Link href={"/problem/" + id}>
      <div className="cursor-pointer flex justify-between py-4 border-b-2 border-white ">
        <div className="w-2/12 pl-3 my-auto">
          {isSolved && <FaCircleCheck />}
        </div>
        <div className="w-8/12">{title}</div>
        <div className="w-2/12">{difficulty}</div>
      </div>
    </Link>
  );
};

export default ProblemLink;
