import { LoginLink } from "../LoginLink";
import { SignInDetailMenuDividerList } from "./SignInDetailMenu.styled";

export default function SignInDetailMenu() {
  return (
    <SignInDetailMenuDividerList gap={8}>
      <LoginLink to={""}>회원가입</LoginLink>
      <LoginLink to={""}>이메일 로그인</LoginLink>
      <LoginLink to={""}>문의하기</LoginLink>
    </SignInDetailMenuDividerList>
  );
}
