import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import Profile from './profile';
import RepoList from './repoList';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer b53f7480622f639e278f82e6bf83269843c9b658'
  }
});

const GET_ORGANIZATION = `
  {
  user(login: "tsaldanha") {
    name
    email,
    login,
    bio,
    avatarUrl,
    websiteUrl,
    company,
    url,
    location,
    repositories(last: 100, privacy: PUBLIC) {
      edges {
        node {
          id
          name
          ref(qualifiedName: "master") {
            target {
              ... on Commit {
                id
                history(first: 20) {
                  pageInfo {
                    hasNextPage
                  }
                  edges {
                    node {
                      messageHeadline
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;

class User extends Component {

  state = {
    path: 'tsaldanha',
    organization: null,
    errors: null,
    name: null,
    repositories: null
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onChange = event => {
    this.setState({ path: event.target.value });
  };

  onSubmit = event => {
    // fetch data

    event.preventDefault();
  };

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then(result =>
        this.setState(() => ({
          user: {
            name: result.data.data.user.name,
            email: result.data.data.user.email,
            login: result.data.data.user.login,
            bio: result.data.data.user.bio,
            avatarUrl: result.data.data.user.avatarUrl,
            websiteUrl: result.data.data.user.websiteUrl,
            company: result.data.data.user.company,
            url: result.data.data.user.url,
            location: result.data.data.user.location,
          },
          repositories: result.data.data.user.repositories.edges,
          errors: result.data.errors,
        })),
      );
  }

  render(){
    const { path, user, repositories, errors } = this.state;
    return (
        <div>
          {user ? (
            <div>
              <Profile user={user} />
              <hr/>
              <RepoList list={repositories}/>
            </div>
            ):(
            <p>Carregando</p>
          )};
        </div>
       
      );
  }
}


export default withRouter(User);