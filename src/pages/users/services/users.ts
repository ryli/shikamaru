import { PAGE_SIZE } from '../constants'
import request from '../../../utils/request'

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`)
}

export function remove(id: number) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  })
}

export function patch(id: number, values: object) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}

export function create(values: object) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  })
}
