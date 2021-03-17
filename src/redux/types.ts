export type TConstant = "SET_USER_TOKEN";
export type TMethods = "setUserToken";

/** Системные типы */
export type TGetState = () => TState;

export type TState = {
  app?: TApp;
}

/** Системные типы */

export type TApp = {
  vk_token?: string,
  token?: string,
  appStory?: TAppStory
}

export type TAction = {
  type: TConstant,
  payload: TApp,
  meta?: object
}

export type TAppStory = {
  activeViews?: string,
  activePanel?: string,
  activePage?: number,
  activeModal?: string,
  activeValue?: number,
  activeTop?: number,
  story: { [key: string]: TStory[] }
}

export type TStory = {
  Views?: string,
  Panel?: string,
  Page?: number,
  Modal?: string,
  Value?: number,
  Top?: number
}
