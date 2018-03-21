export enum Constants {
  LOAD = "app/LOAD",
  EXAMPLE = "app/EXAMPLE"
}

export interface Load {
  type: Constants.LOAD;
}

export interface Example {
  type: Constants.EXAMPLE;
  value: string;
}

export type Action = Load | Example;

export const load = (): Load => ({
  type: Constants.LOAD
});

export const example = (value: string): Example => ({
  type: Constants.EXAMPLE,
  value
});
