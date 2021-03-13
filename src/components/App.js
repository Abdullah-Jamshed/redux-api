import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPoastAndUser } from "../store/actions/action";
import PostsList from "./PostsList";

function App(props) {
  console.log(props)
  useEffect(() => {
    props.postsAPI();
  }, []);

  return (
    <div className="App">
      <PostsList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.subReducer.posts,
    users: state.subReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postsAPI: () => dispatch(fetchPoastAndUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
