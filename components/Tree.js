
import React, {useEffect} from 'react';
import { List, Button} from 'react-native-paper';
import {StyleSheet, SafeAreaView, Text, FlatList, View, StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from '../screens/Order'
import ConfirmationScreen from '../screens/Confirmation'
import bubbletea from '../data';
import DATA from '../data2'
import ELemComponent from './ElemComponent'

function Tree ({ navigation }) {
  const [editionMode, setEditionMode] = React.useState(false);
  const [chipTitle, setChipTitle] = React.useState('édition');
  const [chipIcon, setChipIcon] = React.useState('tools');
  const [ProgressBarColor, setProgressBarColor] = React.useState('');
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState('')

  // const renderJson = () => {
  //   const componentList = []
  //   for (const item of data)
  //       if (item) {
  //         componentList.push(<ELemComponent key={item.id} item={item}></ELemComponent>)
  //       }
  //     return componentList
  // }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  useEffect(() => {
      setData(Object.entries(DATA))
      console.log(typeof(DATA))
  })
  
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item, index}) => {       
        console.log(item)
        return  (renderItem(item))
      }}
      keyExtractor={item => item.id}
    />
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
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    width: 50,
    height: 50,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
}); 

export default Tree;