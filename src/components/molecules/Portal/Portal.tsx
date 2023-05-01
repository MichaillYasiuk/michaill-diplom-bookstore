import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalAnswer {
  ROOT = "root",
  REWIEWS = "reviews",
}

interface PortalProps {
  target: PortalAnswer;
  children: ReactNode;
}

export const Portal = ({ target, children }: PortalProps) => {
  const root = document.getElementById(target) as HTMLElement;

  return ReactDOM.createPortal(children, root);
};
