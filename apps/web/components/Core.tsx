import { Box } from "@repo/ui/box";
import Link from "next/link";
export default function () {
  return (
    <div className="flex bg-gray-200 py-3">
      <Link href="/core/interview-questions">
        <Box isClicked={true} className={""}>
          Interview Questions
        </Box>
      </Link>
      <Link href="/core/interview-experience">
        <Box className="">Interview Experience</Box>
      </Link>
      <Link href="/core/career">
        <Box className="">Career</Box>
      </Link>
      <Link href="/core/study-guide">
        <Box className="">Study Guide</Box>
      </Link>
    </div>
  );
}
