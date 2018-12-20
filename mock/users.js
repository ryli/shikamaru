import mock from 'mockjs'
import { delay } from 'roadhog-api-doc'

const proxy = {
  'GET /api/users': getUsers,
  'POST /api/users': createUser,
  'PATCH /api/users/:id': updateUser,
  'DELETE /api/users/:id': removeUser,
}
const total = 100

function getUsers(req, res) {
  let { _page: page = 1, _limit: limit = 10 } = req.query
  page = Number(page)
  limit = Number(limit)
  const leftCount = total - (page - 1) * limit
  const count = leftCount > limit ? limit : leftCount
  const ret = mock.mock({
      [`data|${count}`]: [{
        'id|1-10000': 800,
        email: '@email',
        name: '@cname',
        website: '@url',
      }],
    })
  if (count === 1) {
    ret.data = [ret.data]
  }

  res.setHeader('x-total-count', total)
  res.json(ret.data)
}

function createUser(req, res) {
  res.setHeader('x-total-count', total + 1)
  res.json({})
}

function updateUser(req, res) {
  res.setHeader('x-total-count', total)
  res.json({})
}

function removeUser(req, res) {
  res.setHeader('x-total-count', total - 1)
  res.json({})
}

export default delay(proxy, 1000)

