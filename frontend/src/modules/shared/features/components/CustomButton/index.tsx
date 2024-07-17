import * as React from "react";
import {Button, Typography} from "antd";
import styled from "styled-components";

const { Text } = Typography;

const StyledCustomButton = styled(Button)`
    &.custom-button {
      padding: 16px 24px;
      .ant-typography {
        margin-left: 8px;
        color: #ffffff;
      }
    }
`;

const CustomButton = ({ icon, content, className, ...props }) => {
    return (
        <StyledCustomButton className={`custom-button${props?.className ? ` ${props?.className}` : ''}`} icon={icon} {...props}>
            <Text type="primary">{content}</Text>
        </StyledCustomButton>
    )
};

export default CustomButton;