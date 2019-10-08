import React from 'react';
import AppNavigator from './src/navigator/appNavigator'
import store from './src/store'
import {Provider} from 'react-redux'

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}