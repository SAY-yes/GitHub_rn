import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import AppNavigator from './navigator/AppNavigator'
import store from './store'
export default App = () => {
  return (
    /* 将store传递给APP */
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
