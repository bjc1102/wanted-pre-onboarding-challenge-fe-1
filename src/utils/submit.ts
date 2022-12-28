import { AxiosResponse } from "axios";

const submit = (result: AxiosResponse<any, any>) => {
  if (result.status === 200) localStorage.setItem("token", result.data.token);
};

export default submit;
