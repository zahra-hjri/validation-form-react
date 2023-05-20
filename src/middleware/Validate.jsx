export const Validate = (values) => {
  const err = {};
  const {
    userName,
    phoneNumber,
    mobileNumber,
    password,
    confirmPassword,
    emailAddress,
    checkRull,
  } = values;

  const regexPassWord =
    // /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexMobile = /^(\+98 | 0)9[0-9]{9}$/;

  const regexPhone = /^0[0-9]{2,}[0-9]{7,}$/;
  if (
    (!userName || !phoneNumber,
    !password || !confirmPassword,
    !emailAddress || !checkRull)
  ) {
    err.empty = "filling the fields is mandatory !!!";
  }

  if (userName.length < 3) {
    err.username = "at least username character is 3";
  }
  if (password != confirmPassword) {
    err.confirmpassword = "passwords are not the same";
  }
  if (!checkRull) {
    err.checkrull = "read and accept the rules";
  }

  if (!regexPassWord.test(password)) {
    err.hardpassword = "The password is weak Similar to this: tesT$8";
  }

  if (!regexEmail.test(emailAddress)) {
    err.email = "the email is not valid";
  }

  if (!regexMobile.test(mobileNumber)) {
    err.mobile = "the mobile number is not valid";
  }
  if (!regexPhone.test(phoneNumber)) {
    err.phone = "the phone number is not valid";
  }
  return err;
};
