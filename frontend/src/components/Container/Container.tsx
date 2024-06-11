import { ReactNode } from "react";
import { ContainerStyles } from "./ContainerStyles.styled";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <ContainerStyles className="container">{children}</ContainerStyles>;
};

export default Container;
