import React from "react";
import { search } from "./redux";
import { connect } from "react-redux";
import ImageList from "./ImageList";
import { Layout, Icon, Input } from "antd";

export class Search extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Icon type="coffee" style={{ fontSize: 28, color: "white" }} />
          <a style={{ margin: "0 6px", color: "white" }}>
            Search Image from Unsplash via API
          </a>
        </Layout.Header>
        <Layout.Content style={{ padding: "25px 50px" }}>
          <Input.Search
            placeholder="input search text"
            enterButton
            onSearch={this.props.search}
          />
          <ImageList
            imgs={this.props.imgResult}
            isLoading={this.props.isLoading}
          />
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: "black", color: "white" }}>
          Created By Levitate
          <Icon type="smile" style={{ marginLeft: "5px" }} />
          <br />
          <Icon type="github" style={{ marginRight: "5px" }} />Github:{" "}
          <a href="https://github.com/Revitate">Revitate</a>
        </Layout.Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
