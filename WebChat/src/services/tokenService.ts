export function saveAccessToken(token: string) {
  if (!token) return console.log("Token undefiend");
  const findToken = getAccessToken();
  if (findToken) return console.log("SaveToken -> Have an token");
  console.log("set token");

  localStorage.setItem("accessToken", token);
}

export function getAccessToken() {
  const getToken = localStorage.getItem("accessToken");
  if (!getToken) return console.log("GetToken -> You haven't a tokens now");
  console.log("getToekn->", getToken);

  return getToken;
}

export function deleteAccessToken() {
  const getToken = getAccessToken();
  if (!getToken) return console.log("DeleteToken -> You haven't a tokens now");

  localStorage.removeItem("accessToken");
}
