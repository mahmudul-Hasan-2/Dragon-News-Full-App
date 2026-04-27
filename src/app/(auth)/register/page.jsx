import RegisterPage from "@/Components/Shared/RegisterPage";
import React from "react";

export const metaData = {
  title: "Register - Dragon News",
  description:
    "Create a Dragon News account to stay updated with the latest news from around the world.",
};

const Register = () => {
  return (
    <div>
      <RegisterPage></RegisterPage>
    </div>
  );
};

export default Register;
