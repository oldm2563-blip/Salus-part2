import { useState } from "react";
import { login } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const submit = (e) => {
    setErrors([]);  
    e.preventDefault();
    login({ email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setErrors(Object.values(err.response.data.errors).flat());
        }
      });
  };

  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter Email"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </div>
        <input type="submit" />
        {errors.length > 0 ? (
          errors.map((error, index) => <p key={index}>{error}</p>)
        ) : (
          <p></p>
        )}
      </form>
    </>
  );
}

export default Login;
