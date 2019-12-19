import good from '../../../services/good';

export default {
  namespace: 'goods',
  state: [],
  effects: {
    *getList(action, { call, put }) {
      let res = yield call(good);
      yield put({ type: 'initgood', payload: res.data.data });
    }
  },
  reducers: {
    initgood(state, action) {
      return action.payload;
    }
  }
};
