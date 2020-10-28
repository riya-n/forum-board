/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import { CommentCard } from '../styles';

const CommentsList = ({ comments }) => {
  console.log('in comments liiist', comments);

  return (
    comments.map((comment) => (
      <CommentCard key={comment.id}>
        <Comment key={comment.id} id={comment.id} comment={comment} />
      </CommentCard>
    ))
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentsList);
