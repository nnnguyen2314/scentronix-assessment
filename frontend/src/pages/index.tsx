import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";

const IndexPage: NextPage = () => {
    return (
        <RootLayout>
            <div>Home</div>
        </RootLayout>
    );
};

export default IndexPage;