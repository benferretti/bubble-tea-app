import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import { List, Button, Checkbox } from 'react-native-paper';

function MyOrder({ route, navigation }) {
  console.log(route.params);
  const { base, flavor, size } = route.params;
  return (
    <View style={styles.container}>
      <Text>
        Ma commande : Bubble Tea {base} {flavor} taille {size}
      </Text>
      <Button
        style={{marginTop: 20}}
        mode="contained"
        icon="check"
        onPress={() => navigation.navigate("Confirmation")}
      >Valider</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyOrder;