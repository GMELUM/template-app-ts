import { TConstant, TGetState } from 'redux/types'
import { Dispatch } from 'redux';

export type TOptions = {
  vk_token: string;
}

const methods = (type: TConstant, options: TOptions) => (dispatch: Dispatch, get: TGetState) => {
  dispatch({
    type: type,
    payload: {
      vk_token: options.vk_token,
    }
  })
}

export default methods;