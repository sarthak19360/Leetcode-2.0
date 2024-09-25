import ProblemLink from "./ProblemLink";

const problemList = [
  {
    id: 1,
    isSolved: false,
    title: "Two Sum",
    difficulty: "Easy",
    examples: [
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
    ],
  },
  {
    id: 2,
    isSolved: true,
    title: "Add Two Numbers",
    difficulty: "Medium",
    examples: [
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
    ],
  },
  {
    id: 3,
    isSolved: false,
    title: "Median of two sorted arrays",
    difficulty: "Hard",
    examples: [
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
      {
        Input: {
          nums: [1, 2, 3, 4],
        },
        Output: true,
      },
    ],
  },
];

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

        {problemList.map((problem) => {
          return (
            <ProblemLink
              key={problem.id}
              id={problem.id}
              isSolved={problem.isSolved}
              title={problem.title}
              // @ts-ignore
              difficulty={problem.difficulty}
              examples={problem.examples}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Problems;
