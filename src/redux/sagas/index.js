import fetchUser from './fetchUser'

export default function * rootSaga () {
  yield [fetchUser]
}
