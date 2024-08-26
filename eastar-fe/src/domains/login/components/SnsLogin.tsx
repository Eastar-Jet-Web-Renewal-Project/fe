import Row from "@commons/components/Default/Layer/Row";
import S from "@commons/components/Default/Images/SvgComponents";
import { Link } from "react-router-dom";

export default function SnsLogin() {
  return (
    <Row gap={16}>
      <Link to={""}>
        <S.SNS.Google />
      </Link>
      <Link to={""}>
        <S.SNS.Kakao />
      </Link>
      <Link to={""}>
        <S.SNS.Facebook />
      </Link>
      <Link to={""}>
        <S.SNS.Apple />
      </Link>
    </Row>
  );
}
