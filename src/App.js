import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return(
    <div>
    <h3>Click Counter</h3>
    <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
}


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   this.increment = this.increment.bind(this);
//   }
//
//   increment(){
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//
//   render(){
//     return(
//       <div>
//         <h4>This is my Counter App!</h4>
//         <button onClick={this.increment}>Clicked {this.state.count} times</button>
//       </div>
//     );
//   }
// }


export default App;
