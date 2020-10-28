const votes = (state = 0, action) => {
  const { type, count } = action;

  switch (type) {
    case 'EDIT_VOTE':
      return count;
    default:
      return state;
  }
};

export default votes;
