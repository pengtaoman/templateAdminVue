import request from '@/utils/request'

export function login(username, password) {
  console.log('########## login executed ##########');
  return request({
    url: '/web/auth',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
