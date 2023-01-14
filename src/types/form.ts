import { SignInitialValue as initialValue } from "../static/const";
import { createObjType } from "./util";

export type SignFormType = createObjType<typeof initialValue>;
