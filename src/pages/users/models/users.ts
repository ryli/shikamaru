import * as usersService from '../services/users'

interface State {
  [key: string]: any
}

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state: State, { payload: { data: list, total, page } }: any) {
      return { ...state, list, total, page }
    },
  },
  effects: {
    * fetch({ payload: { page = 1 } }, { call, put }: any) {
      const { data, headers = {} } = yield call(usersService.fetch, { page })
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page,
        },
      })
    },
    * remove({ payload: id }: any, { call, put, select }: any) {
      yield call(usersService.remove, id)
      const page = yield select((state: State) => state.users.page)
      yield put({ type: 'fetch', payload: { page } })
    },
    * patch({ payload: { id, values } }: any, { call, put, select }: any) {
      yield call(usersService.patch, id, values)
      const page = yield select((state: State) => state.users.page)
      yield put({ type: 'fetch', payload: { page } })
    },
    * create({ payload: values }: any, { call, put, select }: any) {
      yield call(usersService.create, values)
      const page = yield select((state: State) => state.users.page)
      yield put({ type: 'fetch', payload: { page } })
    },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname, query }: any) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query })
        }
      })
    },
  },
}
