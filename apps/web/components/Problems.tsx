import Problem from "@repo/ui/problem";
const Problems = () => {
  return (
    <div className="mx-5 my-8">
      <div className="text-2xl font-bold">Popular Problems</div>
      <p className="text-gray-500 mt-3">
        Check out the most popular programming problems on Leetcode.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Problem
          slug="max-element"
          description="Easy problem for beginners"
          difficulty="MEDIUM"
          submissions={0}
        />
        <Problem
          slug="two-sum"
          description="Easy problem for beginners"
          difficulty="MEDIUM"
          submissions={0}
        />
      </div>
    </div>
  );
};

export default Problems;
