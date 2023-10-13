
const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'USER_LOGIN') {
    return { ...state, ...action.login };
  }
  return state;
};
