export const AddToken = async (
  currency_name: String,
  currency_code: String,
  rate: Number,
  per_hash: Number
) => {
  const response = await fetch("/api/post/addToken", {
    method: "POST",
    body: JSON.stringify({
      currency_name: currency_name,
      currency_code: currency_code,
      rate: rate,
      per_hash: per_hash,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
