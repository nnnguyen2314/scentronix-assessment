import * as React from "react";
import {Col, Row, Space, Typography} from "antd";
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

const StyledIconContainer = styled.div`
    .anticon {
       font-size: 25px;
    }
`

const ItemProperty = ({ icon, title, value }) => {
    return (
      <Space>
          {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
          <div>
              <Row>
                  <StyledTitle>{title}</StyledTitle>
              </Row>
              <Row>
                  <StyledValue>{value}</StyledValue>
              </Row>
          </div>
      </Space>
    );
};

export default ItemProperty;