import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessages from "../common/ErrorMessages";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
  const [errorMessages, setErrorMessages] = useState([]);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const userTypeRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages([]);

    fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
        userType: userTypeRef.current.value,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        } else {
          return res.json();
        }
      })
      .then(({ errorMessages }) => setErrorMessages(errorMessages))
      .catch((err) => setErrorMessages([err.message]));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <ErrorMessages errorMessages={errorMessages} />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={firstNameRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={lastNameRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <select
          name="userType"
          ref={userTypeRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select User Type
          </option>
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
