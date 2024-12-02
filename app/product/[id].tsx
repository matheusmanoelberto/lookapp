import { Stack } from "expo-router";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function Scree() {
  const handleBuyButton = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "" }} />
      <ScrollView style={styles.area}></ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Compar Agora" onPress={handleBuyButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 10,
  },
});
