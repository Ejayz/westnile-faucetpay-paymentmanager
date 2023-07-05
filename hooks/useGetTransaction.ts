export const getTransactions = async () => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };
  let response = await fetch("/api/get/getTransactions", {
    method: "GET",
    headers: headersList,
  });
  let data = await response.json();
  return data;
};
