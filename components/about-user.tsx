import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { User } from "../type/users";
import { Link } from "expo-router";

type Props = {
  data: User;
};

export const AboutUsers = ({ data }: Props) => {
  return (
    <Pressable style={styles.conatiner}>
      <Image
        style={styles.img}
        source={{ uri: data.image }}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>Nome: {data.name}</Text>
        <Text style={styles.idade}>Idade: {data.idade}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#CCCCCC",
    marginRight: 20,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  idade: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
