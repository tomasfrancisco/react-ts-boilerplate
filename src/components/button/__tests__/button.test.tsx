import * as React from "react";
import { ButtonComponent as Button } from "../button.component";
import { shallow, ShallowWrapper } from "enzyme";

describe("ButtonComponent", () => {
  let button: ShallowWrapper;

  beforeEach(() => {
    button = shallow(<Button />);
  });

  it("renders a button tag", () => {
    expect(button.find("button")).toBeTruthy();
  });
});
