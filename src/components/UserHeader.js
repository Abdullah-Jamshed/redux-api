import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  return <div>{props.user && <div className="header">{props.user.name}</div>}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.subReducer.users.find((user) => ownProps.userID === user.id),
  };
};

export default connect(mapStateToProps)(UserHeader);
