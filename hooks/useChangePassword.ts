export const changePassword = async (password: String, newpassword: String) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    password: password,
    newpassword: newpassword,
  });
  let response = await fetch("/api/post/changePassword", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });
  let data = await response.json();
  return data;
};
