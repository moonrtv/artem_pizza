export const reducer = (parameters, action) => {
  if (action.type === 'addChecked') {
    return {
      ...parameters,
      [action.payload.name]: [...parameters[action.payload.name], action.payload.value],
    };
  }

  if (action.type === 'deleteChecked') {
    const temp = parameters[action.payload.name].filter((value) => value !== action.payload.value);

    return {
      ...parameters,
      [action.payload.name]: [...temp],
    };
  }

  if (action.type === 'radio') {
    return {
      ...parameters,
      [action.payload.name]: action.payload.value,
    };
  }
};
