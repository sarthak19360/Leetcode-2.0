import { Button } from "@repo/ui/button";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="text-4xl font-bold flex justify-center py-4">
        Practice for Free
      </div>
      <div className="bg-[#2f3136] px-8 py-12 m-4 rounded-xl">
        <div className="text-3xl text-center font-bold mb-8">
          The best free resources for Coding Interviews. Period.
        </div>
        <div>
          <div className="text-xl font-bold flex my-4">
            <div className="mx-3">✔️</div>Organized study plans and roadmaps
            (Blind 75, Neetcode 150).
          </div>
          <div className="text-xl font-bold flex my-4">
            <div className="mx-3">✔️</div>Organized study plans and roadmaps
            (Blind 75, Neetcode 150).
          </div>
          <div className="text-xl font-bold flex my-4">
            <div className="mx-3">✔️</div>Organized study plans and roadmaps
            (Blind 75, Neetcode 150).
          </div>
          <div className="text-xl font-bold flex my-4">
            <div className="mx-3">✔️</div>Organized study plans and roadmaps
            (Blind 75, Neetcode 150).
          </div>
        </div>
        <div className="flex justify-center text-xl font-bold italic">
          Much more coming soon!
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/problems">
          <Button
            className="mx-2 px-3 py-2 rounded-2xl bg-transparent text-blue-400 border-blue-600 border-4 font-semibold hover:text-white hover:bg-blue-400"
            children="Start Practising"
          />
        </Link>
        <Button
          className="mx-2 px-3 py-2 rounded-2xl bg-transparent text-green-400 border-green-600 border-4 font-semibold hover:text-white hover:bg-green-400"
          children="Start Practising"
        />
      </div>
    </div>
  );
};

export default Homepage;
