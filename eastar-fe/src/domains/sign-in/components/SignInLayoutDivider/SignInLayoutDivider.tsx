import Divider from "@commons/components/Default/Divider/Divider";
import Typography from "@commons/components/Default/Typography/Typography";
import theme from "@styles/Theme/light.theme";
import { StyledSignInLayoutDivider } from "./SignInLayoutDivider.styled";

export default function SignInLayoutDivider() {
  return (
    <StyledSignInLayoutDivider>
      <Divider />
      <Typography type="body" size={4} color={theme.hint}>
        또는
      </Typography>
      <Divider />
    </StyledSignInLayoutDivider>
  );
}
