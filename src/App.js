import React from "react";
import axios from "axios";

import Request from "./components/Request";

const api = "https://5f22f8cf0e9f660016d88b17.mockapi.io/";
const requestAPI = `${api}queries`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: [],
    };
  }

  componentDidMount() {
    axios.get(requestAPI).then(({ data }) => {
      console.log(data);
      this.setState({request: data });
    });
  }

  // componentDidUpdate() {
  // }

 

  render() {
    const {request} = this.state;
    return (
      <>
        <ul>
          {request.length > 0
            ? request.map((request) => (
                <Request key={request.id} category={request.categories} query={request.query} />
              ))
            : "no users found"}
        </ul>
      </>
    );
  }
}

export default App;
