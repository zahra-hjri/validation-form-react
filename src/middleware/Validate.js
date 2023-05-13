export const Validate = (values) => {
  const {
    userName,
    phoneNumber,
    password,
    confirmPassword,
    emailAddress,
    checkRull,
  } = values;

  console.log(
    "userName:",
    userName,
    "phoneNumber:",
    phoneNumber,
    "password:",
    password,
    "confirmPassword:",
    confirmPassword,
    "emailAddress:",
    emailAddress,
    "checkRull:",
    checkRull
  );
};
