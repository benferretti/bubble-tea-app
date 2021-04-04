import { StatusBar } from 'expo-status-bar';
import {List} from 'react-native-paper'
import React,{Children, useState} from 'react';
import { 
  StyleSheet, Text, View,
  SafeAreaView, FlatList, Modal,
  TouchableOpacity, TextInput, Button
} from 'react-native';

const DATA = [
  {
    id: 'lait',
    text: 'Lait',
    children: [
      {
        id: 50, text: "Fraise, Orange, Citron", children: [{id: -1, text: "Mini"}, {id: -2, text: "Géant"}]
      },
      {
        id: 51, text: "Pamplemousse, chocolat", children: [{id: -3, text: "Mini"}, {id: -4, text: "Géant"}]
      },
      {
        id: 52, text: "Beurre fondu, cheddar, gingembre", children: [{id: -5, text: "Mini"}, {id: -6, text: "Géant"}]
      }
    ]
  },
  {
    id: 'thé vert',
    text: 'Thé vert',
    children: [
      {
        id: 53, text: "Jasmin, huile de coude", children: [{id: -1, text: "Mini"}, {id: -2, text: "Géant"}]
      },
      {
        id: 22, text: "Poudre d'amande, miel", children: [{id: -3, text: "Mini"}, {id: -4, text: "Géant"}]
      },
      {
        id: 23, text: "Poudre de perlinpinpin, sucre", children: [{id: -5, text: "Mini"}, {id: -6, text: "Géant"}]
      }
    ]
  },
  {
    id: 'coffee',
    text: 'Coffee',
    children: [
      {
        id: 31, text: "Cola, sel de l'Himalaya", children: [{id: -1, text: "Mini"}, {id: -2, text: "Géant"}]
      },
      {
        id: 32, text: "Butternut, radis noir, vodka", children: [{id: -3, text: "Mini"}, {id: -4, text: "Géant"}]
      },
      {
        id: 33, text: "Glace au caramel, chiendent", children: [{id: -5, text: "Mini"}, {id: -6, text: "Géant"}]
      }
    ]
  }, 
]

export default function App() {
  const [data, setData] = useState(DATA)
  const [isRender, setisRender] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(false)
  const [inputText, setinputText] = useState()
  const [editItem, seteditItem] = useState()

  const onPressItem = (item) => {
    console.log('onPress: ITEM')
    setisModalVisible(true)
    setinputText(item.text)
    seteditItem(item)
  }

  const onPressDetails = (details) => {
    console.log('onPress: DETAILS')
    setisModalVisible(true)
    setinputText(details.text)
    seteditItem(details)
  }


  const onPressSubItem = (item, child, index) => {
    console.log('onPress: SUBITEM')
    setisModalVisible(true)
    setinputText(child.text)
    seteditItem(child)
  }

  const renderSubItem = (child, item, index) => {
    let detailsItems = []
    if (child.children) {
      detailsItems = child.children.map((details, index) => {
        return <TouchableOpacity onPress={()=> onPressDetails(details)}><Text style={styles.detailsText}>{details.text}</Text></TouchableOpacity>
      })
    }
    return (
      <TouchableOpacity
      onPress={()=> onPressSubItem(item, child, index)}>
        <Text style={styles.subText}>{child.text}</Text>
        {detailsItems}
      </TouchableOpacity>
    )
  }

  const renderItem = ({item, index}) => {
    let subitems = []
    if (item.children) {
      subitems = item.children.map((child, index) => {
        return renderSubItem(child, item, index)
      })
    }
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={()=> onPressItem(item)}
      >
        <Text style={styles.text}>{item.text}</Text>
        {subitems}
      </TouchableOpacity>
      )
  }

  
  const handleEditItem = (editItem) => {
    console.log('edit item')
    console.log(editItem)

    if (typeof(editItem.id) === "string") {
      const newData = data.map(item => {
        if (item.id == editItem.id) {
          item.text = inputText
          return item
        }
        return item
      })
      setData(newData)
      setisRender(!isRender)
    }
    else if (typeof(editItem.id) == "number" && editItem.id > 0) {
        // subitem
      const newData = data.map((item, indexi) => {
        item.children.map((subitem, indexj) => {
            if (subitem.id === editItem.id) {
              subitem.text = inputText
              return item
            }
            return item
        })
      })
    }
    else if (typeof(editItem.id) == "number" && editItem.id < 0) {
      const newData = data.map((item, indexi) => {
        item.children.map((subitem, indexj) => {
           subitem.children.map((details, indexk) => {
             if (details.id === editItem.id) {
               details.text = inputText
               return item
             }
             return item
           })
        })
      })
    }
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem)
    setisModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={isRender} 
      />
      <Modal
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={()=> setisModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.text}>Change text:</Text>
          <TextInput 
            style={styles.textInput} 
            onChangeText={(text)=> setinputText(text)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={styles.touchableSave}
          >
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'flex-start'
  },
  subText: {
    fontSize: 20,
    marginLeft: 40,
    marginVertical: 5
  },
  detailsText: {
    fontSize: 15,
    marginLeft: 60
  },
  text: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10
  },
  textInput: {
    width: '90%',
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableSave: {
    backgroundColor: 'yellow',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20
  },
});
