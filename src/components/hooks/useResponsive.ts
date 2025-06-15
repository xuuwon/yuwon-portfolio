import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
  return useMediaQuery({ maxWidth: 767 });
};

export const useIsTablet = () => {
  return useMediaQuery({ maxWidth: 1400 });
};
