import { RecaptchaVerifier } from "firebase/auth";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { auth } from "../../utilities/firebase";

const useReCaptcha = (
  verifyButtonRef: RefObject<HTMLElement>,
  afterVerified: (response: string) => void,
  expiredVerified: () => void = () => {},
) => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  // 재렌더링을 하지 않고, 하나의 RecaptchaVerifierRef만 유지하기 위함
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  const verify = useCallback(() => {
    if (!verifyButtonRef.current) return;
    recaptchaVerifierRef.current = new RecaptchaVerifier(
      auth,
      verifyButtonRef.current,
      {
        size: "invisible",
        callback: (response: string) => {
          afterVerified(response);
          setIsVerified(true);
        },
        "expired-callback": () => {
          expiredVerified(); // 사용자가 양식을 제출하기 전에 reCAPTCHA가 만료될 때 호출
          setIsVerified(false);
        },
      },
    );

    return recaptchaVerifierRef.current.verify;
  }, [verifyButtonRef, afterVerified, expiredVerified]);

  useEffect(() => {
    verify();
  }, []);

  return {
    isVerified,
    verify,
    recaptchaVerifier: recaptchaVerifierRef.current,
  };
};

export default useReCaptcha;
