import { useRef, useState } from "react";
import useReCaptcha from "./@commons/hooks/useAuth/useRecaptcha";
import { ConfirmationResult, signInWithPhoneNumber, User } from "firebase/auth";
import { auth } from "./@commons/utilities/firebase";

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const confirmationResult = useRef<ConfirmationResult | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSMSSent, setIsSMSSent] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [code, setCode] = useState<string>("");
  const { isVerified, _, recaptchaVerifier } = useReCaptcha(
    buttonRef,
    (response) => {
      console.log(response);
    },
  );
  const [user, setUser] = useState<User | null>(null);

  const signIn = async () => {
    if (!recaptchaVerifier) return;

    try {
      // sms 전송
      confirmationResult.current = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier,
      );

      setIsSMSSent(true);
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <>
      <input
        value={phoneNumber}
        onChange={({ target: { value } }) => {
          setPhoneNumber(value);
        }}
      />
      <button ref={buttonRef} onClick={signIn}>
        전화번호 인증
      </button>
      {isVerified && <p>인증완료</p>}
      {isError && <p>메세지 전송 오류</p>}
      {isSMSSent && (
        <>
          <input
            value={code}
            onChange={({ target: { value } }) => {
              setCode(value);
            }}
            placeholder="인증번호 입력"
          />
          <button
            onClick={() => {
              confirmationResult.current?.confirm(code).then((result) => {
                console.log(result.user);
                setUser(auth.currentUser);
              });
            }}
          >
            인증번호 확인
          </button>
        </>
      )}

      {user && <p>{JSON.stringify(user.toJSON())}</p>}
    </>
  );
}

export default App;
