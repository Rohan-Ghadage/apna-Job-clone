import React, { useState } from "react";
import PhoneInputModal from "./PhoneInputModal";
import OtpVerificationModal from "./OtpVerificationModal";

const PhoneAuthFlow = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(true);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (phone) => {
    setPhoneNumber(phone);
    setShowPhoneModal(false);
    setShowOtpModal(true);
    
  };

  const handleOtpVerified = () => {
    setShowOtpModal(false);
    alert("OTP Verified Successfully ✅");
    
  };

  return (
    <>
      <PhoneInputModal
        isOpen={showPhoneModal}
        onSubmit={handlePhoneSubmit}
        onClose={() => setShowPhoneModal(false)}
      />

      <OtpVerificationModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        phone={phoneNumber}
        onVerified={handleOtpVerified}
      />
    </>
  );
};

export default PhoneAuthFlow;
