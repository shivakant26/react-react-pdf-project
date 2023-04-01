import React from "react";

class About extends React.Component {
  constructor() {
    console.log("getDerivedStateFormProp")
    super();
    this.state = {
      name: "bil gates",
      count: Math.floor(Math.random() * 100),
      favoritecolor: "red"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("contrutor")
    return {favoritecolor: props.favcol };
  }

  update() {
    this.setState({ name: "umesh patel" });
  }

  largeFont() {
    let element = document.getElementById("name");
    element.style.fontSize = "45px";
  }

  reset() {
    this.setState({ name: "" });
  }

  counter() {
    this.setState({ count: Math.floor(Math.random() * 100) });
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  render() {
    console.log("render")
    return (
      <>
        <h2 className="text-3xl font-bold italic">{this.state.count}</h2>
        <p>
          Name :{" "}
          <span id="name">
            {this.state.name.length > 0 ? this.state.name : "Empty"}
          </span>
        </p>
        <button onClick={() => this.update()}>update</button>
        <button onClick={() => this.largeFont()}>FontSize</button>
        <button onClick={() => this.reset()}>Reset</button>
        <button onClick={() => this.counter()}>counter</button>
      </>
    );
  }
}
export default About;
