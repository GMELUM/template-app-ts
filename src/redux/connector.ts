import { ComponentType } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import action from 'redux/actions/app';
import { TMethods, TApp, TState } from 'redux/types'

const mapState = (state: TState) => ({ ...state.app });
const mapDispatch = (dispatch: any) => ({ action: (method: TMethods, option: any) => dispatch(action(method, option)) });
const connector = connect(mapState, mapDispatch);

export default <T>(component: ComponentType<TProps>): ComponentType<T> => connector(component);
export type TProps = ConnectedProps<typeof connector>;
