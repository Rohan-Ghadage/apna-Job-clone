import React, { useState } from "react";
import EmployerLoginModal from "./EmployerLoginModal";
import OTPVerificationModalEmployee from "./OTPVerificationModalEmployee";

const PhoneAuthFlowEmployee = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowPhoneModal(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Employer Login
      </button>

      {showPhoneModal && (
        <EmployerLoginModal
          onClose={() => setShowPhoneModal(false)}
          onNext={(phone) => {
            setPhoneNumber(phone);
            setShowPhoneModal(false);
            setShowOTPModal(true);
          }}
        />
      )}

      {showOTPModal && (
        <OTPVerificationModalEmployee
          phone={phoneNumber}
          onClose={() => setShowOTPModal(false)}
        />
      )}
    </div>
  );
};

export default PhoneAuthFlowEmployee;
