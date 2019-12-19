import { call, put, takeEvery } from 'redux-saga/effects';
// 编写模拟登录接口
const api = {
  login() {
    // 返回promise对象
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 登陆成功
          reslove({ id: 1, name: 'tt' });
        } else {
          reject({ message: '登录失败' });
        }
      }, 1000);
    });
  }
};

// 编写真正的saga
function* login(action) {
  try {
    //调用异步方法
    const res = yield call(api.login);
    // put 派发action出发reducer
    yield put({ type: 'login', res });
  } catch (error) {
    yield put({ type: 'login_failed', message: error.message });
  }
}

function* mySaga() {
  // 事件监听 监听action,其实是触发上面的函数
  yield takeEvery('login_request', login);
}

export default mySaga;
