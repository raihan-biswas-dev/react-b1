import React, { Component } from "react";

// const Designation = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Number:{props.deg} | {props.post}
//       </h1>
//       <h3>{props.children}</h3>
//     </div>
//   );
// };

class Designation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>
          Number:{this.props.deg} | {this.props.post}
        </h1>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

export default Designation;
