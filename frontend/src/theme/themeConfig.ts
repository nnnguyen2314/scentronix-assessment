import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 12,
        colorPrimary: '#ffffff',
        colorBgContainer: '#000000',
    },
    components: {
        Button: {
            colorPrimary: '#000000',
            colorBorderBg: '#000000'
        },
        Typography: {
            colorPrimaryText: '#ffffff',
            colorPrimary: '#ffffff',
        }
    },
};

export default theme;