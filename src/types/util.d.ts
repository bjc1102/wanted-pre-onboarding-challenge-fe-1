import { AxiosResponse } from "axios";
import { SignType } from "./form";
import { TodoType } from "./todo";

export type createObjType<T> = {
  [Property in keyof T]: T[Property];
};

type ValueType = SignType | TodoType;
