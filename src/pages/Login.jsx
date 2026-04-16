import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login({setIAuth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submit = (e) => {
    setError('');
    setErrors([]);  
    e.preventDefault();
    login({ email, password })
      .then((response) => {
        if(!response.data.token){
          setError('ur Credentiels are wrong')
        }
        else{
         localStorage.setItem('token', JSON.stringify(response.data.token))
         setIAuth(true);
         navigate('/Dashboard')
        }
        
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
        {error ? (
          <p>{error}</p>
        )
          : (
            <p></p>
          )
      }
      </form>
    </>
  );
}

export default Login;
