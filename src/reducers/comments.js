/* eslint-disable no-param-reassign */
const comments = (state = [], action) => {
  const {
    type, commentId, replyId, id, comment,
  } = action;

  switch (type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id, comment },
      ];
    case 'ADD_REPLY':
      return state.map((parentComment) => {
        if (parentComment.id === commentId) {
          parentComment.comment.replies = parentComment.comment.replies
            ? [...parentComment.comment.replies, { commentId, id, comment }]
            : [{ commentId, id, comment }];
        }
        return parentComment;
      });
    case 'ADD_REPLY_TO_REPLY':
      console.log('trying to add reply to reply');
      return state.map((parentComment) => {
        if (parentComment.id === commentId) {
          parentComment.comment.replies.map((replyComment) => {
            if (replyComment.id === replyId) {
              replyComment.comment.replies = replyComment.comment.replies
                ? [...replyComment.comment.replies, { commentId, replyId, id, comment }]
                : [{ commentId, replyId, id, comment }];
            }
            return replyComment;
          });
        }
        return parentComment;
      });

      // return state.map((parentComment) => ((parentComment.id === commentId)
      //   ? (
      //     parentComment.replies.map((parentReply) => ((parentReply.id === replyId)
      //       ? { ...parentReply, replies: [...parentReply.replies, { id, comment }] }
      //       : parentReply))
      //   )
      //   : parentComment));
    default:
      return state;
  }
};

export default comments;
