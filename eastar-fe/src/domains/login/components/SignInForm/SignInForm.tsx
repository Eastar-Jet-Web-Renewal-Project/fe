import Button from "@commons/components/Default/Button/Button";
import SingleLineInput from "@commons/components/Default/Input/SingleLineInput";
import Spacer from "@commons/components/Default/Spacer";
import { StyledSignInForm } from "./SignInForm.styled";

export default function SignInForm() {
  return (
    <>
      <StyledSignInForm>
        <SingleLineInput value="" onChange={() => {}} placeholder="아이디" />
        <Spacer size={16} />
        <SingleLineInput
          value=""
          onChange={() => {}}
          placeholder="비밀번호"
          type="password"
        />
        <Spacer size={20} />
        <Button content="로그인" style="Filled" />
      </StyledSignInForm>
    </>
  );
}
