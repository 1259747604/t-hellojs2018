// 初始化state
const initialState = {
  isLogin: false
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return { isLogin: true };
    case 'login_failed': {
      return { isLogn: false };
    }
    default:
      return state;
  }
};

// redux-saga 生成action函数
const login = function() {
  return { type: 'login_request' };
};

export { login };
