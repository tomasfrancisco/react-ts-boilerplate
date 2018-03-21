import { Constants, Action } from './app.actions';

export type State = {
  readonly isLoading: boolean;
  readonly exampleValue: string;
};

const initialState: State = {
  isLoading: false,
  exampleValue: ''
};

export const appReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.LOAD:
      return { ...state, isLoading: true };
    case Constants.EXAMPLE:
      return { ...state, exampleValue: action.value };
    default:
      return { ...state };
  }
};
