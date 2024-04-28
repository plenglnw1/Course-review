import React from 'react';
import './App.css';

type AppState = {
  message: string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };

  componentDidMount() {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(obj => {
        this.setState({message: obj.message});
      })
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       Hello World
//     </div>
//   );
// }

export default App;
