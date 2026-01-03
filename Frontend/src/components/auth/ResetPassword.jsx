import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorMessages from "../common/ErrorMessages";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  // Block direct access
  if (!email) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Invalid access. Please request password reset again.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages([]);
    setLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}/api/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Password reset successful. Please login.");
        navigate("/login");
      } else {
        setErrorMessages(data.errorMessages || ["Failed to reset password"]);
      }
    } catch (err) {
      setErrorMessages(["Unable to process request at this time"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

      <ErrorMessages errorMessages={errorMessages} />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* OTP */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
            placeholder="Enter 6-digit OTP"
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-center tracking-widest"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
