import 'core-js/features/map';
import 'core-js/features/set';
import bridge, { VKBridgeEvent, AnyReceiveMethodName } from '@vkontakte/vk-bridge';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from 'redux/store';
import App from 'App';

bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
  if (process.env.NODE_ENV === "development") { console.log(`Новое событие VKBridge: ${e.detail.type}`); }

  switch (e.detail.type) {
    case "VKWebAppUpdateConfig":
      const scheme: string = e.detail.data.scheme ? e.detail.data.scheme : "client_light";
      document.body.setAttribute("scheme", scheme);
      if (bridge.supports('VKWebAppSetViewSettings')) {
        bridge.send('VKWebAppSetViewSettings', {
          'status_bar_style': e.detail.data.scheme === "space_gray"
            ? 'light'
            : 'dark',
          'action_bar_color': e.detail.data.scheme === "space_gray"
            ? '#19191a'
            : '#ffff'
        });
      }
      break;

    default: return;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.onload = () => {
  bridge.send("VKWebAppInit");
}