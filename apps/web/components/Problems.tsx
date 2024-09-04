import { FaCircleCheck } from "react-icons/fa6";
import ProblemLink from "./ProblemLink";
const Problems = () => {
  return (
    <div className="p-5 w-9/12">
      <div className="text-2xl font-bold flex justify-center mb-4">
        Problems
      </div>
      <div>
        <div className="flex justify-between pt-3 text-lg">
          <div className="font-bold w-2/12">Status</div>
          <div className="font-bold w-8/12">Title</div>
          <div className="font-bold w-2/12">Difficulty</div>
        </div>

        <ProblemLink isSolved={false} title="Two Sum" difficulty="Easy" />
        <ProblemLink
          isSolved={true}
          title="Add Two Numbers"
          difficulty="Medium"
        />
        <ProblemLink
          isSolved={false}
          title="Median of two sorted arrays"
          difficulty="Hard"
        />
      </div>
    </div>
  );
};

export default Problems;
