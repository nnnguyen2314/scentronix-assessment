import * as React from "react";
import {Card, Col, Image, Row, Space, Typography} from "antd";
import ItemProperty from "@modules/shared/features/components/ItemProperty";
import {
    ClockCircleOutlined,
    FieldTimeOutlined,
    PieChartOutlined,
    PlusOutlined,
    PrinterOutlined
} from "@ant-design/icons";
import CustomButton from "@modules/shared/features/components/CustomButton";
import styled from "styled-components";

const { Text, Title } = Typography;

const StyledTitleContainer = styled(Row)`
    margin-bottom: 50px;
`;

const StyledDescriptionContainer = styled(Row)`
    text-align: justify;
`;

const StyledInfoContainer = styled(Col)`
    padding-right: 40px;
`;

const StyledCookInfoContainer = styled(Row)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RecipeDetails = ({ name, description, imageUrl, prepTime, bakeTime, totalTime, yieldValue }) => {
    return (
        <Card>
            <Row>
                <StyledInfoContainer md={12} sm={24}>
                    <StyledTitleContainer>
                        <Title level={1}>{name}</Title>
                    </StyledTitleContainer>
                    <StyledDescriptionContainer>
                        <Text>{description}</Text>
                    </StyledDescriptionContainer>
                    <StyledCookInfoContainer>
                        <Col md={8}>
                            <ItemProperty icon={<ClockCircleOutlined />} title="PREP" value={prepTime}/>
                        </Col>
                        <Col md={8}>
                            <ItemProperty title="BAKE" value={bakeTime}/>
                        </Col>
                        <Col md={8}>
                            <ItemProperty title="TOTAL" value={totalTime}/>
                        </Col>
                    </StyledCookInfoContainer>
                    <Row>
                        <Col md={8}>
                            <ItemProperty icon={<PieChartOutlined />} title="YIELD" value={yieldValue}/>
                        </Col>
                        <Col md={8}>
                            <CustomButton icon={<PlusOutlined />} content="SAVE RECIPE" />
                        </Col>
                        <Col md={8}>
                            <CustomButton icon={<PrinterOutlined />} content="PRINT" />
                        </Col>
                    </Row>
                </StyledInfoContainer>
                <Col md={12} sm={24}>
                    <Image src={imageUrl} />
                </Col>
            </Row>
        </Card>
    );
};

export default RecipeDetails;