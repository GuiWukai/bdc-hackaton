import React from "react";
import { Input } from "antd";
const Search = Input.Search;

export class IdInput extends React.Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <Search
        placeholder="input your id"
        onSearch={value => handleSearch(value)}
        enterButton
      />
    );
  }
}
