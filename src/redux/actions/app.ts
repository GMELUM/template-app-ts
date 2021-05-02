import { TConstant, TGetState } from '../types';
import { Dispatch } from 'redux';

import {
  setUserToken
} from './methods'

const app = (action: TConstant, options: any) => (dispatch: Dispatch, get: TGetState) => {
  switch (action) {
    case "SET_USER_TOKEN": setUserToken(action, options)(dispatch, get); break;
    default: console.log(`Controller ${action} was not found!`);
  }
}

export default app;