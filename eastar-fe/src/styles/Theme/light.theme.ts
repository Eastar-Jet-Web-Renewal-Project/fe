import { color as c } from "../color.styles";

const theme = {
  primary: c.red[50], //기본색
  onPrimary: c.white, //기본색 글자색
  surface: c.gray[100], //배경색
  onSurface: c.gray[0], //배경색 글자색
  surfaceContainer: c.gray[99], //컨테이너 배경색
  onSurfaceContainer: c.gray[50], //컨테이너 글자색
  surfaceContainerLowest: c.white, //컨테이너 (제일 밝음) 배경색
  onSurfaceContainerLowest: c.black, //컨테이너 (제일 밝음) 글자색
  onError: c.red[60], //에러색
  shadow: c.gray[60] + "3F", //그림자색
};

export default theme;
