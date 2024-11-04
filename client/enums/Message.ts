enum Message {
  RegistrationSuccess = "The user has successfully registerd.",
  ForgotPasswordSuccess = "Please find the password reset link sent to your email.",
  ResetPasswordSuccess = "Password has successfully reset.",
  SomethingWrong = "Something went wrong. Please try again.",
  SomeInvalidFields = "Some fields are invalid.",
  InvalidEmail = "The email is invalid.",
  IncorrectLogin = "The login details are incorrect.",
  CompleteSignup = "Please complete sign up.",
  NothingToChange = "No changes found.",
  SaveSuccess = "The chages successfully saved.",
}

export default Message;
