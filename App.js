import { View, Text } from 'react-native'
import React from 'react'
import Index from './src/TodoRedux'
import { store } from './src/Project1/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './src/Project1'
export default function App() {
  return (
    // <View style={{flex:1}}>
    //   <Home/>
    // </View>
    <Provider store={store}> 
       <Home/>
  {/* //  <PersistGate persistor={persistor}>
  //  <Index/>
  //  </PersistGate> */}

     
    </Provider>
  )
}