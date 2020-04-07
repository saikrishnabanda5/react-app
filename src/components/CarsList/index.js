import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  onIncrement = () => {
    const { count } = this.state;

    // this.setState(prevState => ({
    //   count: prevState.count + 2
    // }));
    // this.setState(prevState => ({
    //   count: prevState.count + 2
    // }));
    // this.setState(prevState => ({
    //   count: prevState.count + 2
    // }));  
    this.setState({ count: count + 2 });
    this.setState(prevState => ({
      count: prevState.count + 2
    }));
//     this.setState({ count: count + 2 });
//     this.setState({ count: count + 2 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={this.onIncrement}>Increment</button>
      </div>
    );
  }
}

export {Counter};