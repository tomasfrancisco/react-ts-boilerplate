import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ButtonComponent as Button } from "../button.component";

storiesOf("Button", module).add("default", () => (
  <Button onClick={action("onClick")}>Default</Button>
));
