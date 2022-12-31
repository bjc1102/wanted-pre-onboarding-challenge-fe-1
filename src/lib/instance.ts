import { SignType } from "../types/form";
import { TodoType } from "../types/todo";
import instance from "./axios";

const API = {
  signup: async (value: SignType) => {
    return await instance.post("/users/create", value);
  },
  signin: async (value: SignType) => {
    return await instance.post("/users/login", value);
  },
  createTodo: async (value: TodoType) => {
    return await instance.post("/todos", value);
  },
  getTodo: async () => {
    return await instance.get("/todos");
  },
};

export default API;
