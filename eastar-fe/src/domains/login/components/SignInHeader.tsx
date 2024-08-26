import Typography from "@commons/components/Default/Typography/Typography";
import S from "@commons/components/Default/Images/SvgComponents";

export default function SignInHeader() {
  return (
    <>
      <S.Logo />
      <Typography type="subHeading" size={1} color="onSurfaceContainer">
        기분 좋은 만남.
      </Typography>
    </>
  );
}
