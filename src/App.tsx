import { Component } from "react";
import connect, { TProps } from 'redux/connector';
import '@gmelum/vkui/dist/vkui.css';

interface AppProps { }
interface AppState { }

class App extends Component<AppProps & TProps, AppState> {

  constructor(props: TProps) {
    super(props);

    this.state = {}
  }

  render() {
    const { action, vk_token } = this.props;

    action("SET_USER_TOKEN", { vk_token: "LHJGokyugkYUHGkuyghfuyg67kliUHJG" });

    return (<div>{vk_token}</div>)
  }
}

export default connect(App);
