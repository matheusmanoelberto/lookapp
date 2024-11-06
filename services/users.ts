import { data } from "../data";

export const getUsersById = (id: number) => {
  return data.users.find((item) => item.id === id);
};

export const getAllUsers = () => {
  return data.users;
};
