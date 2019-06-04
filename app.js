const fruits = ["apple", "oranges", "mangos", "watermelon"];

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("The initial stage is: " + this.state.value);
    this.setState({ value: event.target.value });
    console.log("The updated stage is: " + this.state.value);
  }

  filterFruits = () => {
    return fruits.filter(fruit =>
      fruit.includes(this.state.value.toLowerCase())
    );
  };

  render() {
    const fruitList = this.filterFruits().map(fruit => {
      return <Item fruitName={fruit} />;
    });

    return (
      <div id="container">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ul>{fruitList}</ul>
      </div>
    );
  }
}

function Item({ fruitName }) {
  return <li>{fruitName}</li>;
}

const element = <Basket />;

const container = document.querySelector("#app");

ReactDOM.render(element, container);
