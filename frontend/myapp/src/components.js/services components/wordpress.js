import React from "react";
import App from "../../App";
import { Card } from "antd";
const { Meta } = Card;
function Wordpress() {
  return (
    <App>
      <Card
        style={{
          width: "70%",
          alignContent: "center",
          marginLeft: "13%",
        }}
        bodyStyle={{ fontSize: "Bolder", color: "black" }}
        cover={<img alt="example" src="" style={{ height: "300px" }} />}
      >
        <Meta style={{ fontWeight: "bolder" }} title="" description="" />
      </Card>
    </App>
  );
}

export default Wordpress;
