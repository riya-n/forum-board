/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  CommentName, CommentText, ReplyButton, ReplyList,
} from '../styles';
import Voter from './Voter';
import NewReply from './NewReply';

const Comment = ({ comment }) => {
  const { commentId, replyId, id } = comment;
  const { name, post, replies } = comment.comment;
  const [addingReply, setAddingReply] = useState(false);
  console.log('comment', comment);

  return (
    <div>
      <Voter />
      <CommentName>{name}</CommentName>
      <CommentText>{post}</CommentText>
      <ReplyList>
        {
          replies ? replies.map((reply) => <Comment key={reply.id} commentId={reply.commentId} replyId={reply.replyId} id={reply.id} comment={reply} />) : ''
        }
      </ReplyList>
      {
        replyId ? '' : (
          <ReplyButton onClick={() => setAddingReply(!addingReply)}>
            <span role="img" aria-labelledby="reply">💬  Reply</span>
          </ReplyButton>
        )
      }
      {
        addingReply ? <NewReply key={id} ids={{ id, commentId }} setAddingReply={setAddingReply} replyTo={name} /> : ''
      }
    </div>
  );
};

export default Comment;
