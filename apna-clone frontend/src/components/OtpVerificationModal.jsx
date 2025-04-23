import React, { useState, useEffect } from "react";

const OtpVerificationModal = ({ isOpen, onClose, phone, onVerified }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (!isOpen) return;
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [isOpen]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(30);
    // Optional: Trigger API to resend OTP
  };

  const isComplete = otp.every((digit) => digit !== "");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
        <p className="mb-4 text-sm text-gray-600">
          We have sent an OTP on : +91-{phone}
        </p>
        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              maxLength={1}
              className="w-12 h-12 border border-gray-400 rounded text-center text-xl"
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">00:{timer < 10 ? "0" + timer : timer}</span>
          <button
            disabled={timer !== 0}
            onClick={handleResend}
            className={`text-sm ${
              timer === 0 ? "text-blue-500 underline" : "text-gray-400"
            }`}
          >
            Resend
          </button>
        </div>
        <button
          disabled={!isComplete}
          onClick={() => isComplete && onVerified()}
          className={`w-full py-2 rounded ${
            isComplete ? "bg-green-600 text-white" : "bg-gray-300 text-gray-500"
          }`}
        >
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
