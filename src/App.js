import React, {useState, useContext} from 'react';

import {PizzaConstructorPage} from './PizzaConstructorPage';
import {PizzaOrderPage} from './PizzaOrderPage';
import {PizzaContext} from './PizzaContext';

const App = () => {
  const {pizza, updateRadioParametersForPizza, updateCheckedParametersFromPizza} = useContext(PizzaContext);
  const [isSubmit, setIsSubmit] = useState(true);

  const handleSubmit = () => {
    setIsSubmit(false);
  };

  return (
    <>
      {isSubmit && (
        <PizzaConstructorPage
          updateRadio={updateRadioParametersForPizza}
          updateChecked={updateCheckedParametersFromPizza}
          handleSubmitOrder={handleSubmit}
          state={pizza}
        />
      )}
      {!isSubmit && <PizzaOrderPage state={pizza} />}
    </>
  );
};

export default App;
