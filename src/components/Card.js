import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import  "../styles/Card.css"
const CardComponent = ({title,id,image}) => {
  let navigate = useNavigate();
  return <Card cover className="card-container">
    <Card.Body>
      <Card.Image
        src={image}
        height={300}
        width="100%"
        alt="Dish image"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        bgBlur: "#ffffff",
      }}
      className="card-footer-container"
    >
      <Row className="card-footer">
        <Col>
          <Text color="#000" size={14} b>
            {title}
          </Text>
        </Col>
        <Col span={6}>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" onClick={()=>navigate("/details")}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Details
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
};

export default CardComponent