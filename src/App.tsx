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
    const { action } = this.props;
    return (<div></div>)
  }
}

export default connect(App);
