import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const RegisterPage = () => {
  return (
    <div className="login-register-wrapper">
      <div className="form-box">
        <div className="register-container" id="register">
          <div className="top">
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Restaurant name"
              />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
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
            <input type="submit" className="submit" value="Register" />
          </div>
          <div className="login">
            <span>
              Have an account? <Link to={"/login"}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
