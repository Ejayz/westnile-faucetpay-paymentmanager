export const AddToken = async (currency_name: String, currency_code: String) => {
  const response = await fetch("/api/post/addToken", {
    method: "POST",
    body: JSON.stringify({
      currency_name: currency_name,
      currency_code: currency_code,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
