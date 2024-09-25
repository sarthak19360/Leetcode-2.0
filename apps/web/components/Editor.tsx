"use client";
import { IoMdSettings, IoMdRefresh } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import { Button } from "@repo/ui/button";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(`#include<iostream>
using namespace std;

int main() {
  // write your code here
  return 0;
}
  `);

  return (
    <div className="flex flex-col border-[1px] border-gray-400 rounded-xl m-2 w-full py-2">
      <div className="flex justify-between py-1 pl-9 pr-4">
        <div>
          <div className="mx-2 text-md font-bold">
            <select name="language" className="bg-[#2F3136]">
              <option>C++</option>
              <option>Javascript</option>
              <option>Python</option>
              <option>Typescript</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <IoMdRefresh className="mx-2 text-2xl" />
          <IoMdSettings className="mx-2 text-2xl" />
          <MdFullscreen className="mx-2 text-2xl" />
        </div>
      </div>

      <div className="flex-grow">
        <Editor
          height="100%"
          language="cpp"
          theme="vs-dark"
          value={code}
          onChange={(newValue: any) => setCode(newValue)}
          options={{
            minimap: { enabled: false },
            fontSize: 17,
            lineNumbers: "on",
            scrollBeyondLastLine: true,
          }}
        />
      </div>
      <div className="border-t-[1px] border-white mt-4"></div>
      <div className="flex justify-between pl-9 pr-4 py-3">
        <div className="py-1 rounded-md mx-2">Console</div>
        <div>
          <Button
            className="bg-slate-700 px-3 py-1 rounded-md mx-2"
            children="Run"
          />
          <Button
            className="bg-green-500 px-3 py-1 rounded-md mx-2"
            children="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
