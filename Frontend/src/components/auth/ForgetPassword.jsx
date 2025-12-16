import { useState } from 'react';
import ErrorMessages from '../common/ErrorMessages';
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrorMessages([]);
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/resetPassword", {
        state: { email }, 
      });
      } else {
        setErrorMessages([data.error || "Something went wrong. Please try again."]);
      }
    } catch (err) {
      setErrorMessages(["Unable to process request at this time."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      <ErrorMessages errorMessages={errorMessages} />
      {message && (
        <div className="mb-5 bg-green-100 border border-green-300 p-3 rounded-md text-green-700 text-sm text-center">
          {message}
        </div>
      )}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="forget-password-email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            id="forget-password-email"
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Enter your registered email"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
