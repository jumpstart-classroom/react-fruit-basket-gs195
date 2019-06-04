const fruits = ["apple", "oranges", "mangos", "watermelon"];

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }
}
