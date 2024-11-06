import { View, StyleSheet, FlatList } from "react-native";
import { getAllUsers } from "../../services/users";
import { AboutUsers } from "../../components/about-user";
import { getUsersById } from "../../services/users";

export default function Screen() {
  const users = getAllUsers();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <AboutUsers data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
