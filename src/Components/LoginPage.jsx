import { useState } from "react";
import { re } from "../constants";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [msg, setMessage] = useState("");
  const nav = useNavigate()
  function handleChange(e) {
    setMessage("")
    setEmail(e.target.value);
  }
  function onClick() {
    if (re.test(email)) {
      setIsLoggedIn(true);
      nav('/loggedIn')
    } else setMessage("Please enter a valid Email Id")
  }
  return (
    <div
      className="loginPage"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
      }}
    >
      <div className="loginPage_contents">
        <div className="login_box">
          <div className="login_title">
            Enjoy big movies, hit series and more from ₹ 149.
          </div>
          <div className="login_desc">Join today. Cancel anytime.</div>
          <div className="input_getstarted">
            <input
              className="input_email"
              type="text"
              value={email}
              onChange={(e) => handleChange(e)}
              placeholder="Email Address"
            />
            <button className="btn_getStarted" onClick={() => onClick()}>
              Get Started &#12297;
            </button>
          </div>
          {msg&& <div style={{color:'red'}}>{msg}</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
