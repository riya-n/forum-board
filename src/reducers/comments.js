const comments = (state = [
  {
    id: 0,
    comment: {
      name: 'riya',
      post: 'this is my post',
      replies: [
        {
          commentId: 0,
          id: 1,
          comment: {
            name: 'sana',
            post: 'this is her reply',
            replies: [
              {
                commentId: 0, replyId: 1, id: 2, comment: { name: 'panks', post: 'replying to sans' },
              },
              {
                commentId: 0, replyId: 1, id: 3, comment: { name: 'shef', post: 'replying to sans too' },
              },
            ],
          },
        },
        {
          commentId: 0,
          id: 4,
          comment: {
            name: 'mars',
            post: 'another reply to reiya',
            replies: [
              {
                commentId: 0, replyId: 4, id: 5, comment: { name: 'sans', post: 'marsuu' },
              },
              {
                commentId: 0, replyId: 4, id: 6, comment: { name: 'shef', post: 'woof' },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 7,
    comment: {
      name: 'alex',
      post: 'hii',
      replies: [],
    },
  },
], action) => {
  const {
    type, commentId, replyId, id, comment,
  } = action;

  console.log('yalskd');

  switch (type) {
    case 'ADD_COMMENT':
      console.log('yoo');
      return [
        ...state,
        { id, comment },
      ];
    case 'ADD_REPLY':
      return state.map((parentComment) => ((parentComment.id === commentId)
        ? { ...parentComment, replies: [...parentComment.replies, { id, comment }] }
        : parentComment));
    case 'ADD_REPLY_TO_REPLY':
      return state.map((parentComment) => ((parentComment.id === commentId)
        ? (
          parentComment.replies.map((parentReply) => ((parentReply.id === replyId)
            ? { ...parentReply, replies: [...parentReply.replies, { id, comment }] }
            : parentReply))
        )
        : parentComment));
    default:
      return state;
  }
};

export default comments;
