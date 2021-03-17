import { Component } from 'react';

interface ExampleProps { }
interface ExampleState { }

class Example extends Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);

    this.state = {}
  }

  render() {
    return (<div></div>)
  };
}

export default Example;