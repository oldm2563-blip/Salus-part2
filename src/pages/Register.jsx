import { useState } from "react";
import { register } from "../services/authService";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const submit = (e) => {
    e.preventDefault();
    setErrors([]);
    register({ name: name, email: email, password: password }).then((r) => {
      if(r.data.errors){
        setErrors(r.data.errors)
      }
    });
  };

  return (
    <>
      <form onSubmit={submit} action="">
        <div>
          <label htmlFor="">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter name"
          />
        </div>
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

        {errors.length > 0 && (
          <>
          <p>error</p>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          )) 
          }
          </>
        )}
      </form>
    </>
  );
}

export default Login;
