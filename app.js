const fruits = ["apples", "oranges", "mangoes", "watermelons", "pears", "figs", "pineapples", "kiwi", "passion fruit", "black grapes", "green grapes", "plums"];

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log("The initial stage is: " + this.state.value);
    this.setState({ value: event.target.value });
    //console.log("The updated stage is: " + this.state.value);
  }

  filterFruits = () => { //
    let a = fruits.filter(fruit =>
      fruit.includes(this.state.value.toLowerCase())
    );
    console.log(a);
    return a
  };

  render() {
    //use map function to convert array/object literal into component
    //tag with attributes obtained from the array/object literal
    const fruitList = this.filterFruits().map(fruit => {
      return <Item fruitName={fruit} />;
    });

console.log("fruitList is: " + fruitList);

    return ( //last step: put list of component tags in <ul> or <react.fragment>
      //to display all the tags there are in the dom tree. when not list but
      //only 1 tag, directly insert it here without getting fruitList
      <div id="container">
        <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search in fruit basket..."/>
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
function Item({ fruitName }) {
  return <li>{fruitName}</li>;
}

function Input({type, value, onChange, placeholder}) {
  return (<input type={type} value={value} onChange={onChange} placeholder={placeholder}/>);
}

const element = <Basket />;

const container = document.querySelector("#app");

ReactDOM.render(element, container);
