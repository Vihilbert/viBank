import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6  font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    شروع کنید
  </button>
);

export default Button;
