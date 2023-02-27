import React from "react";
import App from "../App";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
function Projects() {
  const navigate = useNavigate();
  return (
    <App>
      <div style={{ display: "flex", flexDirection: "row", gap: "3%" }}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          onClick={() => {
            navigate("/project1");
          }}
          cover={
            <img
              alt="example"
              src="online learning website/online learning website homepage.png"
            />
          }
        >
          <Meta
            title="Online learning website"
            description="Website using MERN stack"
          />
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </App>
  );
}

export default Projects;
