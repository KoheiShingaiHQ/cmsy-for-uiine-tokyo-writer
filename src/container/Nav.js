import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const path = { list : "/", detail : "/article" };

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { menu : [] }
  }
  closeMenu(e) {
    e.preventDefault();
    var header = document.getElementsByTagName('header')[0];
    header.classList.remove('show-menu');
  }
  getObjectName(currentPath) {
    for (var i in path) {
      if (currentPath === path[i]) {
        return i;
      }
    }
  }
  componentDidMount() {
    var menu = [];
    var data = [
      //{name: path.detail.split('/').join(''), path: path.detail, class: 'detail'},
      {name: "view", path: "https://koheishingaihq.github.io/cmsy-for-uiine-tokyo/", class: ''},
      {name: "recently", path: path.list, class: 'list'}
    ];
    for(var i in data){
      menu.push(<a href={(data[i].path.indexOf("http") !== -1) ? data[i].path : "#/" + data[i].path} target={(data[i].path.indexOf("http") !== -1) ? "_blank" : ""} key={data[i].name}><li className={data[i].class}>{data[i].name}</li></a>);
    }
    this.setState({ menu : menu });
  }
  render() {
    return (
      <nav>
        <ul data-selected={this.getObjectName("/" + window.location.hash.split("#").join("").split("/")[1]) || ""}>
          <li id="close-menu" onClick={this.closeMenu}>☓</li>
          {this.state.menu}
        </ul>
      </nav>
    );
  }
}

export default Nav;