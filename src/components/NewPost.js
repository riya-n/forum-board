import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  NewPostCard, CommentNameInput, NewPostTitle, CommentTextArea, SubmitButton, DisabledSubmitButton,
} from '../styles';
import { addComment } from '../actions';

const NewPost = () => {
  const [name, setName] = useState('');
  const [post, setPost] = useState('');

  return (
    <NewPostCard
      onSubmit={(e) => {
        e.preventDefault();
        console.log('in here');
        addComment({ name, post, replies: [] });
        setName('');
        setPost('');
      }}
    >
      <NewPostTitle>New Post</NewPostTitle>
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
  addComment: (comment) => dispatch(addComment(comment)),
});

export default connect(null, mapDispatchToProps)(NewPost);
