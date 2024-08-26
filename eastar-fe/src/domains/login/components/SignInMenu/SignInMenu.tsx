import DividerList from "@commons/components/Default/Divider/DividerList";
import { LoginLink } from "../LoginLink";

export default function SignInMenu() {
  return (
    <DividerList>
      {/* //TODO: Link 연결 */}
      <LoginLink to={""}>아이디 찾기</LoginLink>
      <LoginLink to={""}>비밀번호 찾기</LoginLink>
    </DividerList>
  );
}
