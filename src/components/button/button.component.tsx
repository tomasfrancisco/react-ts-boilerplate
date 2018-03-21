import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
`;

export class ButtonComponent extends React.Component<
  {
    children?: any;
  },
  {}
> {
  public render() {
    return <Button>{this.props.children}</Button>;
  }
}
