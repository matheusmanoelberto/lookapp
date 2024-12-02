import { View, StyleSheet, FlatList } from "react-native";
import {
  getAllProducts,
  getProductByCategory,
} from "../../../services/products";
import { Producitem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategorieById } from "../../../services/category";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategorieById(idCategory);
  if (!category) return router.back();

  const products = getProductByCategory(idCategory);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category.title }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <Producitem data={item} />}
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
