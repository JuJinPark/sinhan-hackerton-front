import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getIdToken() {
  return Cookies.get('userId')
}

export function setToken(token) {
  //console.log("cookie")
  return Cookies.set(TokenKey, token)
}

export function setIdToken(token) {
  console.log("setIdToken")
  return Cookies.set('userId', token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeIdToken() {
  return Cookies.remove('userId')
}
