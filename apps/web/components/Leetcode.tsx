import { Button } from "@repo/ui/button";
import Link from "next/link";

const Leetcode = () => {
  return (
    <div className="px-5 py-5">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* text component */}
        <div className="mt-4">
          <div className="text-3xl font-bold">Welcome to Leetcode</div>
          <p className="pt-4 text-gray-500">
            Leetcode is a platform for solving programming problems. Study about
            computer fundmentals and kick off your interview journey.
          </p>
          <div className="mt-20">
            <Link href="/contests">
              <Button
                className="px-3 py-2 rounded-lg bg-black text-white mr-2"
                children="View Contests"
              />
            </Link>
            <Link href="/problems">
              <Button
                className="px-3 py-2 rounded-lg border-2 ml-2"
                children="Solve Problems"
              />
            </Link>
          </div>
        </div>
        {/* image component */}
        <div className="py-5 hidden md:block">
          <img
            className="rounded-md"
            src="https://ideogram.ai/assets/image/balanced/response/OZ93FYuyRpmpgNxX0fRMSw"
            alt="alt-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
