import * as React from "react";
import { Provider } from "react-redux";
import { appStore } from "./app.store";
import { ButtonComponent } from "@components/button";

export class AppController extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={appStore}>
        <ButtonComponent>Button</ButtonComponent>
      </Provider>
    );
  }
}
