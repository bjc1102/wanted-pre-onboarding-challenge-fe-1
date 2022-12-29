import { SignType } from "../types/form";
import instance from "./axios";

const API = {
  signup: async (value: SignType) => {
    return await instance.post("/users/create", value);
  },
  signin: async (value: SignType) => {
    return await instance.post("/users/login", value);
  },
};

export default API;
