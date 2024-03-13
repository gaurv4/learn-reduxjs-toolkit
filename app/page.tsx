'use client'
import Counter from "@/components/client/counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Counter/>
        <Counter/>
      </Provider>
    </>
  );
}
