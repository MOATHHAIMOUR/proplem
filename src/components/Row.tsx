import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Row = ({ children }: IProps) => {
  return <div className="fle">{children}</div>;
};

export default Row;
