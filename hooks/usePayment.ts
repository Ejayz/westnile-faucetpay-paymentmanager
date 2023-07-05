export const sendPayment = async (
  amount: Number,
  currency: String,
  refferal: Boolean,
  to: String
) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    amount: amount,
    to: to,
    currency: currency,
    referral: refferal,
  });

  let response = await fetch("/api/post/payment", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
};
