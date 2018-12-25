import fetch from 'dva/fetch'

type headersType = {
  [key: string]: string
}

interface RetType {
  data: any
  httpCode: number
  headers: headersType
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error: any = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url: string, options: object = {}) {
  const response = await fetch(url, options)

  checkStatus(response)

  const data = await response.json()

  const ret: RetType = {
    data,
    httpCode: response.status,
    headers: {},
  }

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count')
  }

  return ret
}
