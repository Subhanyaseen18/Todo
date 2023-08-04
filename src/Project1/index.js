import {View, Text, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changename ,changestatus} from './reducer';

export default function Home() {
  const dispatch = useDispatch();
  // destructure the object from store
  const {name, age,status} = useSelector(state => state);

  console.log('name', name);

  const handle =(nam) => {
//  const res=await   fetch('https://jsonplaceholder.typicode.com/users')
// const result=await res.json()
    dispatch(changename(nam)); 
  }; 

  const handlestatus=(status)=>{
    dispatch(changestatus(status))
  }
  return (
    <View>
      <Text>NAME:{name}</Text>
      <Button onPress={() => handle("yaseen")} title="onclick" />
      <Text>STATUS:{status}</Text>
      <Button onPress={() => handlestatus('200')} title="onclick" />
      
    </View>
  );
}
