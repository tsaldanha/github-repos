import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import RepoList from './repoList';

import { setUser, setRepositories, setData } from "../../data/actions"; 

import { connect } from "react-redux";

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUBKEY}`
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
          name,
          description,
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

function mapDispatchToProps(dispatch){
  return{
    setUser: user => dispatch(setUser(user)),
    setRepositories: repositories => dispatch(setRepositories(repositories)),
    setData: data => dispatch(setData(data))
  }
}
function mapStateToProps(state) {
  const { user, repositories } = state;
  return { 
    user: user , 
    repositories: repositories
  }
}

class User extends Component {


  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onSubmit = event => {
    // fetch data

    event.preventDefault();
  };

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then(result => {
        this.props.setData({
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
          repositories: result.data.data.user.repositories.edges
        });
      });
  }

  render(){
    return (
        <div>
          {this.props.user.name ? (
            <div>
              <Profile profile={this.props.user} />              
              <RepoList list={this.props.repositories}/>
            </div>
            ):(
            <p>Carregando</p>
          )}
        </div>
       
      );
  }
}

const USER = connect(mapStateToProps, mapDispatchToProps)(User);

export default withRouter(USER);