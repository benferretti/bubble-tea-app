
import * as React from 'react';
import { List, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from '../screens/Order'
import ConfirmationScreen from '../screens/Confirmation'
import bubbletea from '../data';

function Tree ({ navigation }) {
  const [editionMode, setEditionMode] = React.useState(false);
  const [chipTitle, setChipTitle] = React.useState('édition');
  const [chipIcon, setChipIcon] = React.useState('tools');
  const [ProgressBarColor, setProgressBarColor] = React.useState('');
  const [text, setText] = React.useState('');
  console.log('--------NOUVEAU--------');

  return (
    <List.Accordion
      title="COMPOSANT TREE"
      left={(props) => <List.Icon {...props} icon="beer-outline" />}
    >
      <List.Accordion style={styles.flavor} title="Fraise">
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Fraise",
              size: "Petit",
            })
          }
        >
          Petit
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Fraise",
              size: "Moyen",
            })
          }
        >
          Moyen
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Fraise",
              size: "Grand",
            })
          }
        >
          Grand
        </Button>
      </List.Accordion>
      <List.Accordion style={styles.flavor} title="Lychee">
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Lychee",
              size: "Petit",
            })
          }
        >
          Petit
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Lychee",
              size: "Moyen",
            })
          }
        >
          Moyen
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Lychee",
              size: "Grand",
            })
          }
        >
          Grand
        </Button>
      </List.Accordion>
      <List.Accordion style={styles.flavor} title="Mangue">
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Mangue",
              size: "Petit",
            })
          }
        >
          Petit
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Mangue",
              size: "Moyen",
            })
          }
        >
          Moyen
        </Button>
        <Button
          mode="text"
          color="black"
          onPress={() =>
            navigation.navigate("Commande", {
              base: "Lait",
              flavor: "Mangue",
              size: "Grand",
            })
          }
        >
          Grand
        </Button>
      </List.Accordion>
    </List.Accordion>
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