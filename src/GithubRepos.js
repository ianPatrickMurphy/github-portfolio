import React from "react";
import "./style.css";

export default class GithubRepos extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = {
      repos: []
    }
  }

  // on start, fetch my repo values from the github api, and store them in an array
  componentDidMount() {
    fetch('https://api.github.com/users/ianPatrickMurphy/repos')
    .then((response) => response.json())
    .then(reposArray => {this.setState({ repos: reposArray })})
  }

  render() {
    return (
      <div>
        <h2>Github Repositories</h2>
        <ul>
            {this.state.repos.map((repo) => ( // for every repo, include the link and description
                <li key={repo.name}>
                  <h3><a href={repo.html_url}>{repo.name}</a></h3>
                  <p>{repo.description}</p>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}