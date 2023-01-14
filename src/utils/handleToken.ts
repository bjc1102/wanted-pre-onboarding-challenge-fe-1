function removeToken() {
  localStorage.removeItem("token");
}

function storageToken(token: string) {
  localStorage.setItem("token", token);
}

function findToken() {
  return !!localStorage.getItem("token");
}

export { removeToken, storageToken, findToken };
