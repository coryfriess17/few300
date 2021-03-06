import { Action } from '@ngrx/store';

export interface UiHintsState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: UiHintsState = {
  hasError: false,
  errorMessage: ''
};

export function reducer(state: UiHintsState = initialState, action: Action) {
  switch (action.type) {
    case '[math] save score failed': {
      return {
        hasError: true,
        errorMessage: 'Could not save scores. Sorry, Jill. Quit Cheating!'
      };
    }
    default:
      return state;
  }
}
