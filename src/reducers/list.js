const INITIAL_STATE = [
  {
    id: 1,
    question: 'What is a Merge Conflict in Git and how can it be resolved?',
    answer:
      'When you have merging branches with opposing commits, a merge conflict occurs, and Git needs your help to select which changes to include in the final merge.',
    status: 0, // 0, 1, 2
    statusText: 'To Do',
  },
  {
    id: 2,
    question: 'What Is an Attribute in HTML',
    answer:
      'Attributes are the properties that can be added to an HTML tag that change the way the tag behaves or is displayed.',
    status: 1, // 0, 1, 2
    statusText: 'Done',
  },
  {
    id: 3,
    question: 'What is SVG in HTML',
    answer:
      'HTML SVG is a markup language that describes vector and raster graphics. XML text files define SVG pictures and associated behaviors.',
    status: 2, // 0, 1, 2
    statusText: 'Done',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action = {}) => {
  if (action.type === 'ADD_QUESTION') {
    const newList = [...state.list];
    newList.push({
      id: state.list.length + 1,
      question: state.question.title,
      answer: state.question.answer,
      status: 0, // 0, 1, 2
      statusText: 'To Do',
    });
    const newState = {
      question: {
        title: '',
        answer: '',
      },
      list: newList,
    };
    // debugger;
    return newState;
  }
  if (action.type === 'CHANGE_QUESTION_TITLE') {
    return {
      ...state,
      question: {
        ...state.question,
        title: action.payload,
      },
    };
  }
  if (action.type === 'CHANGE_QUESTION_ANSWER') {
    return {
      ...state,
      question: {
        ...state.question,
        answer: action.payload,
      },
    };
  }
  if (action.type === 'DONE') {
    const list = state.list.map((el) => {
      if (el.id === action.payload) {
        return {
          ...el,
          statusText: 'Done',
          status: 2,
        };
      }
      return el;
    });
    return {
      ...state,
      list: list,
    };
  }
  if (action.type === 'IN PROGRESS') {
    const list = state.list.map((el) => {
      if (el.id === action.payload) {
        return {
          ...el,
          statusText: 'In Progress',
          status: 1,
        };
      }
      return el;
    });
    return {
      ...state,
      list: list,
    };
  }
  return state;
};
