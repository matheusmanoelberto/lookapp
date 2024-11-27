import { Pressable, Text } from "react-native";
import { Category } from "../type/category";

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  return (
    <Pressable>
      <Text>{data.title}</Text>
    </Pressable>
  );
};
