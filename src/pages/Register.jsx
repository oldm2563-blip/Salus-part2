import { useState } from "react";
import { register } from "../services/authService";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const submit = (e) => {
    setErrors([]);
    e.preventDefault();
    register({ name: name, email: email, password: password }).then((r) => {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        navigate('/Dashboard')
    }).catch((err) => {
      if(err.response){
        setErrors(Object.values(err.response.data.errors).flat());
      }
    })
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
