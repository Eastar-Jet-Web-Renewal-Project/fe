import { SignInLayoutContainer } from "./SignInLayout.styled";
import Spacer from "@commons/components/Default/Spacer";
import SignInHeader from "../components/SignInHeader";
import SignInForm from "../components/SignInForm/SignInForm";
import SnsLogin from "../components/SnsLogin";
import SignInDetailMenu from "../components/SignInDetailMenu/SignInDetailMenu";
import SignInLayoutDivider from "../components/SignInLayoutDivider/SignInLayoutDivider";
import SignInMenu from "../components/SignInMenu/SignInMenu";

export default function SignInLayout() {
  return (
    <SignInLayoutContainer>
      <SignInHeader />
      <Spacer size={48} />
      <SignInForm />
      <Spacer size={32} />
      <SignInMenu />
      <Spacer size={60} />
      <SignInLayoutDivider />
      <Spacer size={22} />
      <SnsLogin />
      <Spacer size={32} />
      <SignInDetailMenu />
    </SignInLayoutContainer>
  );
}
