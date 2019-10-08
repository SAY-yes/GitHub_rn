import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import AppNavigator from './navigator/appNavigator'
import store from './store'
export default App = () => {
  return (
    /* 将store传递给APP */
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
