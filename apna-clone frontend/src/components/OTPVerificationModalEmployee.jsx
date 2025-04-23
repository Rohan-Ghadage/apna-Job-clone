import React, { useState, useEffect } from "react";

const OTPVerificationModalEmployee = ({ phone, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (val, index) => {
    if (/^\d?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);
      if (val && index < 3) document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const isOtpFilled = otp.every((d) => d !== "");

  const handleSubmit = () => {
    if (isOtpFilled) {
      alert(`OTP Submitted: ${otp.join("")}`);
      onClose();
    } else {
      alert("Please fill all digits.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow w-96">
        <button onClick={onClose} className="text-gray-500 mb-2 text-sm">
          ← Back
        </button>
        <h3 className="text-xl font-semibold mb-2">Verify OTP</h3>
        <p className="text-gray-600 text-sm mb-4">
          A one time password sent on your mobile number <br />
          <span className="font-medium text-blue-700">+91-{phone}</span>
        </p>
        <div className="flex gap-2 justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm text-center mb-4">
          Didn't receive OTP? Resend in <span className="font-medium">{`00:${timer
            .toString()
            .padStart(2, "0")}`}</span>
        </p>
        <button
          onClick={handleSubmit}
          disabled={!isOtpFilled}
          className={`w-full py-2 rounded text-white transition ${
            isOtpFilled
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default OTPVerificationModalEmployee;
