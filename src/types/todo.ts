export interface TodoDataResponse {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoFormType = Omit<
  TodoDataResponse,
  "createdAt" | "updatedAt" | "id"
>;

export function isTodoDataResponseType(
  data: unknown
): data is TodoDataResponse {
  const TodoDataResponse =
    typeof data === "object" &&
    "id" in (data as any) &&
    typeof (data as any)["id"] === "string";
  if (TodoDataResponse === false) throw new Error("data is not AuthResponse");
  return TodoDataResponse;
}
