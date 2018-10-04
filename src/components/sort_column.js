import React, { Component } from "react";

class SortColumn extends Component {
  clickHandler(sort, order) {
    this.props.setSort(sort.heading, order);
  }

  toggleOrder(order) {
    console.log("toggling");
    return order === "asc" ? "desc" : "asc";
  }

  renderList() {
    const headings = [
      "city",
      "Temperature (Kelvin)",
      "Pressure (hPa)",
      "Humidity (%)"
    ];
    let index = 0;
    const currentSort = this.props.currentSort;
    const currentOrder = this.props.currentOrder;
    console.log(currentOrder);
    return headings.map(heading => {
      currentSort === heading.heading ? console.log("yep") : console.log();
      let isActive = currentSort === heading ? "active " : "";
      let cn =
        currentSort === heading && currentOrder === "asc"
          ? "oi oi-chevron-top"
          : "oi oi-chevron-bottom";
      if (currentSort !== heading) {
        cn = "";
      }
      return (
        <th
          className={isActive}
          key={index++}
          onClick={() =>
            this.clickHandler(
              { heading },
              currentSort === heading ? this.toggleOrder(currentOrder) : "asc"
            )
          }
        >
          <span className={cn} />
          {heading}
        </th>
      );
    });
  }
  render() {
    return (
      <thead>
        <tr>{this.renderList()}</tr>
      </thead>
    );
  }
}

export default SortColumn;
