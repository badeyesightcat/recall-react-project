import React from "react";

const CustomList = (props) => {
  console.log(props);
  const listItems = props.list.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "magenta" : "darkgreen" }}>
      {item.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default CustomList;
