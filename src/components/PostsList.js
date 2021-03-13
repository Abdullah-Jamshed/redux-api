import React from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const PostsList = (props) => {
  return (
    <div className="ui relaxed divided list container">
      {props.posts.map((post, k) => {
        return (
          <div key={k} className="item">
            <i className="user middle aligned circle huge icon"></i>
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="description">{post.body}</div>
              <UserHeader userID={post.userId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.subReducer.posts,
  };
};

export default connect(mapStateToProps)(PostsList);
