import { useWindowDimensions } from 'react-native';

export default function useResponsive() {
  const { width } = useWindowDimensions();

  return {
    width,
    isSmall: width < 480,
    isMedium: width >= 480 && width < 1024,
    isLarge: width >= 1024,
  };
}
