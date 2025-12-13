export const validateData = (username, pwd) => {
  const isCorrectEmail =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(username);
  const isCorrectPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
  // Indian Number With +91 / 0 / No Prefix
  const isCorrectPhone = /^(?:\+91[\s-]?)?0?[6-9]\d{9}$/.test(username);

  if (!isCorrectEmail && !isCorrectPhone) return "Invalid username";
  if (!isCorrectPwd) return "Invalid password";
  return null;
};
