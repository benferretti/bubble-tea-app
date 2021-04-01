
import React, {useEffect} from 'react';
import { List, Button} from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from '../screens/Order'
import ConfirmationScreen from '../screens/Confirmation'
import bubbletea from '../data';
import ELemComponent from './ElemComponent'

function Tree ({ navigation }) {
  const [editionMode, setEditionMode] = React.useState(false);
  const [chipTitle, setChipTitle] = React.useState('édition');
  const [chipIcon, setChipIcon] = React.useState('tools');
  const [ProgressBarColor, setProgressBarColor] = React.useState('');
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState('')

  const renderJson = () => {
    const componentList = []
    for (const item of data)
        if (item) {
          componentList.push(<ELemComponent key={item.id} item={item}></ELemComponent>)
        }
      return componentList
  }

  useEffect(() => {
      setData(bubbletea)
  })
  
  return (
    <SafeAreaView>
    {renderJson()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flavor: {
    paddingLeft: 100,
  },
  items: {
    paddingLeft: 200,
  },
}); 

export default Tree;