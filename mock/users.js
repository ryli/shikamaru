import mock from 'mockjs'
import { delay } from 'roadhog-api-doc'

const proxy = {
  'GET /api/users': getUsers,
}

function getUsers(req, res) {
  res.end({
    'list|100': mock.mock({
      'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    }),
  })
}

export default delay(proxy, 1000)

