import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const LoginPage = () => {
  return (
    <div className="login-register-wrapper">
      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Login</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>
          <div className="register">
            <span>
              Don't have an account? <Link to={"/register"}>Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
