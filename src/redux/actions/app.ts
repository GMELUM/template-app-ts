import { TMethods, TGetState, TApp, TStory } from '../types';
import { Dispatch } from 'redux';

import {
  setUserToken
} from './methods'

export default (action: TMethods, options: TApp & TStory) => (dispatch: Dispatch, get: TGetState) => {
  switch (action) {
    case "setUserToken": setUserToken('SET_USER_TOKEN', options)(dispatch, get); break;
    default: console.log(`Controller ${action} was not found!`);
  }
}
