import _ from "lodash";
import jsonPlaceholderAPI from "../../api/jsonPlaceholderAPI";

//  reason of using lodash here is while fetching data same user fetch many times(number of post make by same user)
const fetchPoastAndUser = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPost());
    const userID = _.uniq(_.map(getState().subReducer.posts, "userId"));
    userID.forEach((id) => dispatch(fetchUser(id)));
  };
};

const fetchPost = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholderAPI.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: { posts: response.data } });
  };
};

const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholderAPI.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: { user: response.data } });
  };
};

export { fetchPost, fetchUser, fetchPoastAndUser };
