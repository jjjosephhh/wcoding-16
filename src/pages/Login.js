import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const checkCredentials = () => {
      const {username, password} = credentials;
      if (username !== 'myuser') return alert('No such username');
      if (password !== 'password') return alert('Incorrect password');
      navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const signin = event => {
      event.preventDefault();
      checkCredentials();
  };

  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Welcome to the mall</p>
          <p className="subtitle">Please login to start spending money</p>
        </div>
      </section>

      <div className="container" style={{ padding: "32px 0" }}>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <form onSubmit={signin}>
                <input
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="input is-primary"
                  type="text"
                  placeholder="Please input your username"
                />
                <br />
                <br />
                <input
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="input is-primary"
                  type="password"
                  placeholder="Please input your password"
                />
                <br />
                <br />
                <button className="button is-link">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
