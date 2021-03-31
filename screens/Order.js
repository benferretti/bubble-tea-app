import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function MyOrder({ route, navigation }) {
  console.log(route.params);
  const { base, flavor, size } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>
        Ma commande : Bubble Tea {base} {flavor} taille {size}
      </Text>
    </View>
  );
}

export default MyOrder;