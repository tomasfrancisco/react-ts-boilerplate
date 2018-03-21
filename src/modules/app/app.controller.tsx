import * as React from "react";
import { Provider } from "react-redux";
import { appStore } from "./app.store";

export class AppController extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={appStore}>
        <div />
      </Provider>
    );
  }
}
