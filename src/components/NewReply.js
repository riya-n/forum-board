/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  NewPostCard, CommentNameInput, CommentTextArea, SubmitButton, DisabledSubmitButton,
} from '../styles';
import { addReply, addReplyToReply } from '../actions';

const NewReply = ({ ids, setAddingReply, replyTo }) => {
  const { id, commentId } = ids;
  const [name, setName] = useState('');
  const [post, setPost] = useState(`@${replyTo}`);

  return (
    <NewPostCard
      onSubmit={(e) => {
        e.preventDefault();
        setAddingReply(false);
        if (commentId) {
          addReplyToReply(commentId, id, { name, post });
        } else {
          addReply(id, { name, post, replies: [] });
        }
        setName('');
        setPost('');
      }}
    >
      <CommentNameInput
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <CommentTextArea
        placeholder="Write a new post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      {
        (name === '' || post === '') ? <DisabledSubmitButton disabled>Submit</DisabledSubmitButton>
          : <SubmitButton type="submit">Submit</SubmitButton>
      }
    </NewPostCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addReply: (commentId, comment) => dispatch(addReply(commentId, comment)),
  addReplyToReply: (commentId, replyId, comment) => dispatch(
    addReplyToReply(commentId, replyId, comment),
  ),
});

export default connect(null, mapDispatchToProps)(NewReply);
