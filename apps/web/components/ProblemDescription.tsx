const examples = [
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
];

const ProblemDescription = () => {
  return (
    <div className="border-[1px] border-gray-400 rounded-xl m-2">
      <div className="flex border-b-[1px]">
        <div className="mx-1 my-1 p-2">Question</div>
        <div className="mx-1 my-1 p-2">Solution</div>
        <div className="mx-1 my-1 p-2">Submissions</div>
      </div>
      <div className="py-8 px-5">
        <div className="text-xl font-bold py-2">Duplicate Integer</div>
        <div className="text-green-500 font-bold py-2">Easy</div>
        <div className="py-6">
          Given an integer array nums, return true if any value appears more
          than once in the array, otherwise return false.
        </div>
        <div>
          {examples.map((example, index) => {
            return (
              <div>
                <div className="font-bold py-4 text-lg">
                  {"Example " + (index + 1) + ":"}
                </div>
                <div className="bg-[#222] py-4 rounded-md">
                  <div className="flex my-2">
                    <div className="mx-4 text-green-700 my-2">Input:</div>
                    <div className="my-2">{JSON.stringify(example.Input)}</div>
                  </div>
                  <div className="flex  my-2">
                    <div className="mx-4 text-green-700 my-2">Output:</div>
                    <div className="my-2">{JSON.stringify(example.Output)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
