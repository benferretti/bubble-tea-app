
import * as React from 'react';
import { List, Button, Checkbox } from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from './screens/Order'


function HomeScreen ({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={{ justifyContent: "center", alignContent: "center" }}>
      <List.Section title="Personnalisez votre Bubble Tea">
        <List.Accordion
          title="Base Lait"
          left={(props) => <List.Icon {...props} icon="folder" />}
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
              style={{ Colors: "red" }}
              mode="text"
              color="black"
              onPress={() => console.log("Pressed")}
            >
              Moyen
            </Button>
            <Button
              style={{ Colors: "red" }}
              mode="text"
              color="black"
              onPress={() => console.log("Pressed")}
            >
              Grand
            </Button>
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Lychee">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Mangue">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
        </List.Accordion>
        <List.Accordion
          title="Base Thé Vert"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Accordion style={styles.flavor} title="Fraise">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Lychee">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Mangue">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
        </List.Accordion>
        <List.Accordion
          title="Base Thé Noir"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Accordion style={styles.flavor} title="Fraise">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Lychee">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
          <List.Accordion style={styles.flavor} title="Mangue">
            <List.Item title="Petit" style={styles.items} />
            <List.Item title="Moyen" style={styles.items} />
            <List.Item title="Grand" style={styles.items} />
          </List.Accordion>
        </List.Accordion>
      </List.Section>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;