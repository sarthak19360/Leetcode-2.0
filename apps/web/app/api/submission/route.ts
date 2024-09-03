import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    msg: "Hi there",
  });
}

export async function POST(req: NextRequest) {
  const submission = await req.json();
  console.log("Received Submission: ", submission);

  return NextResponse.json({
    msg: "Submission received ",
    submission,
  });
}
