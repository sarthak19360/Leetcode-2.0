"use client";
import { Button } from "./button";

interface PRoblemProps {
  slug: string;
  description: string;
  difficulty: string;
  submissions: number;
}

const problem = ({
  slug,
  description,
  difficulty,
  submissions,
}: PRoblemProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex flex-col space-y-1.5">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          {slug}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-between my-6">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Difficulty</p>
          <p>{difficulty}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Submissions</p>
          <p>{submissions}</p>
        </div>
      </div>
      <Button
        className="px-3 py-2 rounded-lg bg-black text-white mr-2"
        children="View Problem"
      />
    </div>
  );
};

export default problem;
