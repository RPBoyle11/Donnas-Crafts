import { API_BASE_URL } from "../config";

function sendConfirmationEmail(emailInfo) {
  console.log('Sending email confirmation');
  console.log('emailInfo from sending function >>>>', emailInfo);

  return fetch(`${API_BASE_URL}/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      email: emailInfo.email,
      firstName: emailInfo.firstName,
      lastName: emailInfo.lastName,
      phone: emailInfo.phone,
      orderDetails: emailInfo.orderDetails
    })
  })
  .then(res => res.json())
  .catch(err => console.log(err));
};

export default sendConfirmationEmail;