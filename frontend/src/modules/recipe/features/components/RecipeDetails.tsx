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

const { Text, Title } = Typography;
const RecipeDetails = ({ name, description, imageUrl, prepTime, bakeTime, totalTime, yield }) => {
    return (
        <Card>
            <Row>
                <Col md={12} sm={24}>
                    <Row>
                        <Title level={1}>{name}</Title>
                    </Row>
                    <Row>
                        <Text>{description}</Text>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <ItemProperty icon={<ClockCircleOutlined />} title="PREP" value={prepTime}/>
                        </Col>
                        <Col md={8}>
                            <ItemProperty title="BAKE" value={bakeTime}/>
                        </Col>
                        <Col md={8}>
                            <ItemProperty title="TOTAL" value={totalTime}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <ItemProperty icon={<PieChartOutlined />} title="YIELD" value={yield}/>
                        </Col>
                        <Col md={8}>
                            <CustomButton icon={<PlusOutlined />} content="SAVE RECIPE" />
                        </Col>
                        <Col md={8}>
                            <CustomButton icon={<PrinterOutlined />} content="PRINT" />
                        </Col>
                    </Row>
                </Col>
                <Col md={12} sm={24}>
                    <Image src={imageUrl} />
                </Col>
            </Row>
        </Card>
    );
};

export default RecipeDetails;