
import * as React from 'react';
import { List, Button, ProgressBar, Colors } from 'react-native-paper';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from './screens/Order'
import ConfirmationScreen from './screens/Confirmation'


function HomeScreen ({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={{ justifyContent: "center", alignContent: "center" }}>
      <List.Section title="Personnalisez votre Bubble Tea">
        <List.Accordion
          title="Base Lait"
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
        <List.Accordion
          title="Base Thé Vert"
          left={(props) => <List.Icon {...props} icon="leaf" />}
        >
          <List.Accordion style={styles.flavor} title="Fraise">
            <Button
              mode="text"
              color="black"
              onPress={() =>
                navigation.navigate("Commande", {
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
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
                  base: "Thé Vert",
                  flavor: "Mangue",
                  size: "Grand",
                })
              }
            >
              Grand
            </Button>
          </List.Accordion>
        </List.Accordion>
        <List.Accordion
          title="Base Thé Noir"
          left={(props) => <List.Icon {...props} icon="beer" />}
        >
          <List.Accordion style={styles.flavor} title="Fraise">
            <Button
              mode="text"
              color="black"
              onPress={() =>
                navigation.navigate("Commande", {
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
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
                  base: "Thé Noir",
                  flavor: "Mangue",
                  size: "Grand",
                })
              }
            >
              Grand
            </Button>
          </List.Accordion>
        </List.Accordion>
      </List.Section>
      <View style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
        <ProgressBar progress={0.333} />
      </View>
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Commande" component={OrderScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;