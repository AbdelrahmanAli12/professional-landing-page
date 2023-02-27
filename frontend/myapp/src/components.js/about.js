import React from "react";
import App from "../App";
import { Card } from "antd";
const { Meta } = Card;
function About() {
  return (
    <App>
      <div
        style={{
          display: "flex",
          gap: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={<img alt="example" src="photo.jpg" />}
        >
          <Meta
            title="Ali Geith , Abdelrahman Ali"
            description="Undergrad Software enginners"
          />
        </Card>
      </div>
    </App>
  );
}

export default About;
