import { useState, useEffect } from "react";

type ReturnType<T> =
  | { result: undefined; state: "error" }
  | { result: undefined; state: "loading" }
  | { result: T; state: "complete" };

const useGetRequest = <T>(path: string): ReturnType<T> => {
  const [state, setState] = useState<ReturnType<T>["state"]>("loading");
  const [result, setResult] = useState<T>();
  useEffect(() => {
    fetch(path)
      .then((resp) => resp.json())
      .then((resp) => {
        setResult(resp);
        setState("complete");
      })
      .catch((e) => {
        console.error(`Failed to send GET request to ${path}`, e);
        setState("error");
      });
  }, [path]);

  return { state, result } as ReturnType<T>;
};

export default useGetRequest;
