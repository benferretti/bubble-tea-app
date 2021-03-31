import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import { List, Button, Checkbox } from 'react-native-paper';

function MyOrder({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Votre commande est en cours de préparation !
      </Text>
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