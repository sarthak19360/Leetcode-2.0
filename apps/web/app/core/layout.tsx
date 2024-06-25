import { ReactNode } from "react";
import Core from "../../components/Core";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div>
      <Core />
      {children}
    </div>
  );
}
