const INITIAL_STATE = {
  posts: [],
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload.posts,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };

    default:
      return state;
  }
};
