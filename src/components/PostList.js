import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  console.log(props.postList);
  return (
    <React.Fragment>
      <hr />
      {props.postList.map((post) =>
        <Post 
        whenPostClicked={ props.onPostSelection }
        name = {post.name}
        date = {post.date}
        id = {post.id}
        key = {post.id} />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};

export default PostList; 