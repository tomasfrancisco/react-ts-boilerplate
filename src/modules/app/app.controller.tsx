import * as React from "react";
import { Provider } from "mobx-react";
import { AppStore } from "./app.store";
import DevTools from "mobx-react-devtools";
import { ButtonComponent as Button } from "@components/button";

export type Stores = { appStore: AppStore };

export class AppController extends React.Component<{}, {}> {
  private stores: Stores;

  constructor(props: any) {
    super(props);

    this.stores = {
      appStore: new AppStore()
    };
  }

  public render() {
    return (
      <React.Fragment>
        <Provider {...this.stores}>
          <Button>Button</Button>
        </Provider>
        {process.env.NODE_ENV === "development" && <DevTools />}
      </React.Fragment>
    );
  }
}
