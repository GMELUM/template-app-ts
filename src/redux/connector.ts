import { ComponentType } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import action from 'redux/actions/app';
import { TConstant, TState } from 'redux/types'

type TMethods = {
    ["SET_USER_TOKEN"]: import("./actions/methods/setUserToken/setUserToken").TOptions;
}

const mapState = (state: TState) => ({ ...state.app });
const mapDispatch = (dispatch: any) => ({ action: <T extends TConstant>(method: T, option: TMethods[T]) => dispatch(action(method, option)) });
const connector = connect(mapState, mapDispatch);
const bridge = <T>(component: ComponentType<TProps> | any): ComponentType<T> => connector(component);

export type TProps = ConnectedProps<typeof connector>;
export default bridge;
