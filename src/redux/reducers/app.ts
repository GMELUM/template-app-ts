import update from 'immutability-helper';

import { TAction, TApp } from '../types';

const initialState: TApp = {}

const app = (state: TApp = initialState, action: TAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER_TOKEN': return update(state, { vk_token: { $set: payload.vk_token } });
    default: return state;
  }
}

export default app;