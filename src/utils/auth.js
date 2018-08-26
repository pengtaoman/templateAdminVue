import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  console.log('###### get token from cookies #####');
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log('###### set token to cookies #####');
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  console.log('###### remove token from cookies #####');
  return Cookies.remove(TokenKey)
}
