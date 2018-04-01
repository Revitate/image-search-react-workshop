import React from "react";
import { List, Icon, Card, Avatar,  } from "antd";

export default class ImageList extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div style={{ textAlign: "center", margin: "100px" }}>
          <Icon type="loading" style={{ fontSize: 28 }} />
          <br />
          <p style={{ margin: "10px" }}>Loading</p>
        </div>
      );
    } else {
      return (
        <div>
          <List
            style={{ margin: "20px" }}
            grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5 }}
            dataSource={this.props.imgs}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="" src={item.urls.small} />}
                >
                  <Card.Meta
                    avatar={<Avatar src={item.user.profile_image.small} />}
                    title={item.user.name}
                    description={item.description}
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      );
    }
  }
}
