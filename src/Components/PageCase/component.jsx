import { useLocation } from "react-router-dom";
import { ContentCase } from "../ContentCase/component";
import { useEffect } from "react";

export const PageCase = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <ContentCase />;
};
