/* eslint-disable no-plusplus */
let nextCommentId = 0;

export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  id: nextCommentId++,
  comment,
});

export const addReply = (commentId, comment) => ({
  type: 'ADD_REPLY',
  commentId,
  id: nextCommentId++,
  comment,
});

export const addReplyToReply = (commentId, replyId, comment) => ({
  type: 'ADD_REPLY_TO_REPLY',
  commentId,
  replyId,
  id: nextCommentId++,
  comment,
});

export const editVote = (count) => ({
  type: 'EDIT_VOTE',
  count,
});
