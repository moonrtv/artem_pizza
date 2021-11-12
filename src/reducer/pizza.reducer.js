export const reducer = (parameters, action) => {
  if (action.type === 'checkbox') {
    const temp = parameters[action.payload.name].map((item) =>
      item.id === action.payload.id ? {...item, checked: !item.checked} : {...item}
    );

    return {
      ...parameters,
      [action.payload.name]: [...temp],
    };
  }

  if (action.type === 'radio') {
    const temp = parameters[action.payload.name].map((item) =>
      item.id === action.payload.id ? {...item, checked: true} : {...item, checked: false}
    );

    return {
      ...parameters,
      [action.payload.name]: [...temp],
    };
  }
};
