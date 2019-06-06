
// const fruits = [
//   "apples",
//   "oranges",
//   "mangoes",
//   "watermelons",
//   "pears",
//   "figs",
//   "pineapples",
//   "kiwi",
//   "passion fruit",
//   "green grapes",
//   "plums"
// ];

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", fruits: [] };
    this.handleChange = this.handleChange.bind(this);
    this.url =
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits/";
  }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(this.url);

  //     if (!response.ok) {
  //       throw new Error("Something happened");
  //     }

  //     const fruits = await response.json();
  //     this.setState({ fruits });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  componentDidMount() {
    fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something happened");
        }
        return response.json();
      })
      .then(data => {
        this.setState(
          {fruits:data}
        );
      });
    console.log(this.state.fruits);
  }

  // componentDidMount() {
  //   const url =
  //     "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits/";

  //   fetch(url)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         throw new Error("Ouch! This failed");
  //       }
  //       console.log("response", response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("data: ", data);
  //       this.setState({
  //         fruits: data
  //       });
  //     })
  //     .catch(err => {
  //       console.log("this is an error", err.message);
  //     });
  // }

  handleChange(event) {
    //console.log("The initial stage is: " + this.state.value);
    this.setState({ value: event.target.value });
    //console.log("The updated stage is: " + this.state.value);
  }

  filterFruits = () => {
    //
    let nameList = this.state.fruits.filter(fruit =>
      fruit.type.includes(this.state.value.toLowerCase())
    );
    console.log("nameList:",nameList);
    return nameList;
  };

  render() {
    //use map function to convert array/object literal into component
    //tag with attributes obtained from the array/object literal
    const fruitList = this.filterFruits().map(fruit => {
      return <Item fruitEmoji={fruit.emoji} fruitName={fruit.type} />;
    });

    console.log("fruitList is: " + fruitList);

    return (
      //last step: put list of component tags in <ul> or <react.fragment>
      //to display all the tags there are in the dom tree. when not list but
      //only 1 tag, directly insert it here without getting fruitList
      <div id="container">
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search in fruit basket..."
        />
        {/* <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        /> */}
        <ul>{fruitList}</ul>
      </div>
    );
  }
}

//component tags are converted into html tags through
//the following function
function Item({ fruitName, fruitEmoji }) {
  return <li>{fruitEmoji} {fruitName}</li>;
}

function Input({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

const element = <Basket />;

const container = document.querySelector("#app");

ReactDOM.render(element, container);
