import { Card, Row, Col } from "antd";
import App from "../App";

const { Meta } = Card;

const crew = [
  {
    name: "Ali Ghieth",
    experience: "5 years",
    photo: "photo.jpg",
  },
  {
    name: "Abdelrahman Ali",
    experience: "5 years",
    photo: "photo.jpg",
  },
];

function About() {
  return (
    <App>
      <Row style={{ marginLeft: "30%" }} gutter={[16, 16]}>
        {crew.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={member.name} src={member.photo} />}
            >
              <Meta title={member.name} description={member.experience} />
            </Card>
          </Col>
        ))}
      </Row>
    </App>
  );
}

export default About;
