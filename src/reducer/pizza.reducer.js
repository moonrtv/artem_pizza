import {parameterCostForPizza} from './mokData';

export const reducer = (parameters, action) => {
  if (action.type === 'addCheckbox') {
    return {
      ...parameters,
      [action.payload.type]: [
        ...parameters[action.payload.type],
        {id: action.payload.id, title: action.payload.title, cost: parameterCostForPizza[action.payload.id]},
      ],
    };
  }

  if (action.type === 'deleteCheckbox') {
    const temp = parameters[action.payload.type].filter((item) => item.id !== action.payload.id);

    return {
      ...parameters,
      [action.payload.type]: [...temp],
    };
  }
  if (action.type === 'radio') {
    return {
      ...parameters,
      [action.payload.type]: {
        ...parameters[action.payload.type],
        ...{id: action.payload.id, title: action.payload.title, cost: parameterCostForPizza[action.payload.id]},
      },
    };
  }
};
