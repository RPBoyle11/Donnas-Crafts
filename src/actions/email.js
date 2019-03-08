import { API_BASE_URL } from "../config";
// import { normalizeResponseErrors } from "./utils";

export const CONFIRM_EMAIL_REQUEST = 'CONFIRM_EMAIL_REQUEST';
export const confirmEmailRequest = () => ({
  type: CONFIRM_EMAIL_REQUEST
});

export const CONFIRM_EMAIL_SUCCESS = 'CONFIRM_EMAIL_SUCCESS';
export const confirmEmailSuccess = () => ({
  type: CONFIRM_EMAIL_SUCCESS
});
export const CONFIRM_EMAIL_ERROR = 'CONFIRM_EMAIL_ERROR';
export const confirmEmailError = err => ({
  type: CONFIRM_EMAIL_ERROR,
  err
});

function sendConfirmationEmail(emailInfo) {
  // const email = getState().auth.currentUser.email;
  console.log('Sending email confirmation');
  console.log('emailInfo from sending function >>>>', emailInfo);

  return fetch(`${API_BASE_URL}/email`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: emailInfo.email,
      firstName: emailInfo.firstName,
      lastName: emailInfo.lastName,
      phone: emailInfo.phone,
      orderDetails: emailInfo.orderDetails
    })
  })
  .catch(err => console.log(err));
};

export default sendConfirmationEmail;