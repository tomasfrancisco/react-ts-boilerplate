import { observable } from "mobx";

export class AppStore {
  @observable public color: string = "red";
}
