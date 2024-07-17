import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import VideoListContainerWithPlaying from "@modules/video/features/videoList/containers/VideoListContainerWithPlaying";

const IndexPage: NextPage = () => {
    return (
        <RootLayout>
            <VideoListContainerWithPlaying />
        </RootLayout>
    );
};

export default IndexPage;