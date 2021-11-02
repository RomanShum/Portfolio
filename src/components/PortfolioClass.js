import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class PortfolioClass extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "All" };
    this.handler = this.handler.bind(this);
  }

  handler(filter) {
    this.setState({
      selected: filter.currentTarget.innerHTML,
    });
  }

  filter(selected) {
    let images = [
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers",
      },
    ];

    if (selected === "All") {
      return images;
    } else {
      return images.filter((o) => o.category === selected);
    }
  }

  render() {
    let portfolio = this.filter(this.state.selected);
    return (
      <div className="portfolioWrap">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.selected}
          onSelectFilter={this.handler}
        />
        <ProjectList projects={portfolio} />
      </div>
    );
  }
}

export default PortfolioClass;
