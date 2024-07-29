import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yap</p>
        <button onClick={handleClick}>
          <img src="./public/g-logo.png" />
          <span>Goole İle Gir</span>
        </button>
      </div>
    </div>
  );
};
export default AuthPage;
