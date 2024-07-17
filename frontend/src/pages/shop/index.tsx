import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import CustomButton from "@modules/shared/features/components/CustomButton";
import {ShoppingCartOutlined} from "@ant-design/icons";
import ItemProperty from "@modules/shared/features/components/ItemProperty";

const ShopPage: NextPage  = () => {
    return (
        <RootLayout>
            <div>Shop</div>
            {/*<div>*/}
            {/*    <ItemProperty title="test" value="test value"/>*/}
            {/*</div>*/}
            {/*<CustomButton className="test-btn" icon={<ShoppingCartOutlined />} content="Buy" type="primary"/>*/}
        </RootLayout>
    )
};

export default ShopPage;