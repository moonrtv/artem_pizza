import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import {PizzaConstructorPage} from './PizzaConstructorPage';
import {PizzaOrderPage} from './PizzaOrderPage';
import {PizzaContext} from './PizzaContext';
import {PizzaOrdersPage} from './PizzaOrdersPage';
import {LoginPage} from './LoginPage';
import {RegistrationPage} from './RegistrationPage';
import {NotFoundPage} from './NotFoundPage';

const App = () => {
  const {pizza, updateRadioParametersForPizza, updateCheckedParametersFromPizza} = useContext(PizzaContext);
  const [isSubmit, setIsSubmit] = useState(true);

  const handleSubmit = () => {
    setIsSubmit(false);
  };

  const constructorPage = isSubmit && (
    <PizzaConstructorPage
      updateRadio={updateRadioParametersForPizza}
      updateChecked={updateCheckedParametersFromPizza}
      handleSubmitOrder={handleSubmit}
      state={pizza}
    />
  );
  const orderPage = !isSubmit ? <PizzaOrderPage state={pizza} /> : <Navigate to="/" />;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={constructorPage} />
          <Route path="/order" element={orderPage} />
          <Route path="/orders" element={<PizzaOrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
