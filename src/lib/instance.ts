import { createObjType, SignType } from "../types/util";
import instance from "./axios";

const API = {
  signup: async (value: createObjType<SignType>) => {
    return await instance.post("/users/create", value);
  },
};

export default API;
