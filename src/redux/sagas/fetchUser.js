import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_FETCH, USER_FETCH_SUCCEEDED } from '../actionTypes'

function * fetchUser (action) {
  try {
    const user = yield call(null, action.payload)
    yield put({ type: USER_FETCH_SUCCEEDED, user })
  } catch (error) {

  }
}

export default function * () {
  yield takeLatest(USER_FETCH, fetchUser)
}
