import * as React from "react";
import {Col, Row, Typography} from "antd";
import styled from "styled-components";
const { Text, Title } = Typography;

const StyledTitle = styled(Text)`
  font-weight: normal;
  font-size: 11px;
`;

const StyledValue = styled(Text)`
  font-weight: 400;
  font-size: 12px;
`;

const ItemProperty = ({ icon, title, value }) => {
    return (
      <Row>
          {icon && <Col>{icon}</Col>}
          <Col>
              <Row>
                  <StyledTitle>{title}</StyledTitle>
              </Row>
              <Row>
                  <StyledValue>{value}</StyledValue>
              </Row>
          </Col>
      </Row>
    );
};

export default ItemProperty;