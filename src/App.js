import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {PizzaConstructor} from './pages/PizzaConstructor';
import {Order} from './pages/Order';
import {Orders} from './pages/Orders';
import {Login} from './pages/Login';
import {Registration} from './pages/Registration';
import {NotFound} from './pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PizzaConstructor />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
