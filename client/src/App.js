import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      webTitle: "",
      apiResponse: ""
    };
  }

  getSchoolDetails = () => {
    console.log("results @@ " + this.props._user.userName);
    var url = "https://react-azure-ecinfo.azurewebsites.net/getSchoolName?username=" + this.props._user.userName;
    fetch(url)
      .then(response => response.text())
      .then(results => {
        console.log("results @@ " + results);
        this.setState({ schoolName: results });
      })
      .catch(error => {
        console.log("error @@ " + JSON.stringify(error));
      });
  };

  componentDidMount() {
    this.getSchoolDetails();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            //<p>Your username is : {this.props._user.userName}</p>
          }
          <p>Your school name is : {this.state.schoolName}</p>
        </header>
      </div>
    );
  }
}

export default App;
