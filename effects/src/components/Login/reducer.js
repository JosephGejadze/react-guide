const loginReducer = (state, action) => {
  switch (action.type) {
    case BLUR_EMAIL:
      return {
        ...state,
        emailIsValid: state.email.includes("@"),
      };
    case BLUR_PASSWORD:
      return {
        ...state,
        passwordIsValid: state.password.trim().length > 6,
      };
    case INPUT_EMAIL:
      return {
        ...state,
        email: action.value,
        emailIsValid: action.value.includes("@"),
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        password: action.value,
        passwordIsValid: action.value.trim().length > 6,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        formIsValid: state.passwordIsValid && state.emailIsValid,
      };
    default:
      return {
        email: "",
        emailIsValid: false,
        formIsValid: false,
        password: "",
        passwordIsValid: false,
      };
  }
};

export const BLUR_EMAIL = "USER_BLUR_EMAIL";
export const BLUR_PASSWORD = "USER_BLUR_PASSWORD";
export const INPUT_EMAIL = "USER_INPUT_EMAIL";
export const INPUT_PASSWORD = "USER_INPUT_PASSWORD";
export const VALIDATE_FORM = "VALIDATE_FORM";
export default loginReducer;
