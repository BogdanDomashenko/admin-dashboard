import { FC } from "react";
import { Layout } from "react-admin";
import { NavigationBar } from "./navigationBar/NavigationBar";

//!props first thebn menu

export const MyLayout: FC = (props) => {
  return <Layout {...props} menu={NavigationBar} />;
};
