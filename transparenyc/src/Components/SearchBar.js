import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect , withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      inputQuery: "",
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value,
      inputQuery: e.target.value,
      redirect: false
    });
  };

  handleSubmit = () => {
      const location = this.props.location.pathname
    
    console.log('state' , this.state)
    const { searchInput, inputQuery } = this.state;
    this.setState({
      redirect: true,
      inputQuery: ""
    });
    // return <Redirect to={`/search/${searchInput}`} />;
  };

  render() {
    const { inputQuery, searchInput, redirect } = this.state;
    const location = this.props.location.pathname
    console.log("search bar props", this.props.location.pathname);
    console.log('redirect search bar',redirect)
    if (redirect) {
      return (
        <div>
        <Redirect
          to={{
            pathname: `/search/${searchInput}`,
            state: { redirect: false }
          }}
        />
        <div class="box">
            <div class="container-1">
            <span class="icon"><i class="fa fa-search"></i></span>
                <input
                type="search"
                id= "search"
                onChange={this.handleChange}
                placeholder="search"
                className="searchBar"
                value={inputQuery}
                />
                <button onClick={this.handleSubmit}><i class="fa fa-search"></i></button>
            </div>
        </div>
      </div>
      );
    }

    return (
      <div>
        <div class="box">
          <div class="container-1">
              <span class="icon"><i class="fa fa-search"></i></span>
              <input
              type="search"
              id= "search"
              onChange={this.handleChange}
              placeholder="search"
              className="searchBar"
              value={searchInput}
              />
              <button onClick={this.handleSubmit}><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
