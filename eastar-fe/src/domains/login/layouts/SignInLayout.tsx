import Button from "@commons/components/Default/Button/Button";
import SingleLineInput from "@commons/components/Default/Input/SingleLineInput";
import {
  SignInForm,
  SignInLayoutContainer,
  SignInLayoutDivider,
} from "./SignInLayout.styled";
import DividerList from "@commons/components/Default/Divider/DividerList";
import Divider from "@commons/components/Default/Divider/Divider";
import Typography from "@commons/components/Default/Typography/Typography";
import theme from "@styles/Theme/light.theme";
import Spacer from "@commons/components/Default/Spacer";
import S from "@commons/components/Default/Images/SvgComponents";
import Row from "@commons/components/Default/Layer/Row";
import { LoginLink } from "../components/LoginLink";

export default function SignInLayout() {
  return (
    <SignInLayoutContainer>
      <S.Logo />
      <Typography type="subHeading" size={1} color="onSurfaceContainer">
        기분 좋은 만남.
      </Typography>
      <Spacer size={48} />
      <SignInForm>
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
      </SignInForm>
      <Spacer size={32} />
      <DividerList>
        {/* //TODO: Link 연결 */}
        <LoginLink to={""}>아이디 찾기</LoginLink>
        <LoginLink to={""}>비밀번호 찾기</LoginLink>
      </DividerList>
      <Spacer size={60} />
      <SignInLayoutDivider>
        <Divider />
        <Typography type="body" size={4} color={theme.hint}>
          또는
        </Typography>
        <Divider />
      </SignInLayoutDivider>
      <Spacer size={22} />
      <Row gap={16}>
        <S.SNS.Google />
        <S.SNS.Kakao />
        <S.SNS.Facebook />
        <S.SNS.Apple />
      </Row>
      <Spacer size={32} />
      <DividerList gap={8}>
        {/* //TODO: Link 연결 */}
        <LoginLink to={""}>회원가입</LoginLink>
        <LoginLink to={""}>이메일 로그인</LoginLink>
        <LoginLink to={""}>문의하기</LoginLink>
      </DividerList>
    </SignInLayoutContainer>
  );
}
