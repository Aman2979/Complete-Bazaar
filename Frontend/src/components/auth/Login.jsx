import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessages from "../common/errorMessages";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState([]);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages([]);

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      dispatch(login(data))
      navigate("/");
    } else if (res.status === 401) {
      setErrorMessages(data.errorMessages);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <ErrorMessages errorMessages={errorMessages} />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
