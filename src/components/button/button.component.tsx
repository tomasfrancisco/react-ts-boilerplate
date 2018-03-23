import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #0053ff;
  border: 1px solid currentColor;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font: 400 14px "Lato";

  &:hover {
    background-color: #eee;
  }
`;

export class ButtonComponent extends React.Component<
  {
    onClick?: () => void;
    children?: any;
  },
  {}
> {
  public render() {
    const { onClick } = this.props;

    return <Button onClick={onClick}>{this.props.children}</Button>;
  }
}
