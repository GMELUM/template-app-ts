import { TConstant, TApp, TGetState } from 'redux/types'
import { Dispatch } from 'redux';

export default (type: TConstant, options: TApp) => (dispatch: Dispatch, get: TGetState) => dispatch({
  type: type,
  payload: {
    vk_token: options.vk_token,
  }
})
