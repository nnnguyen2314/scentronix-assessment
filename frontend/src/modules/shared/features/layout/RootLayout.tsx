import React from 'react';
import Link from "next/link";
import {Layout} from 'antd';
import {HomeFilled} from "@ant-design/icons";
import styled from 'styled-components';
import MainNav from "@modules/shared/features/nav/MainNav";
import SubNav from "@modules/shared/features/nav/SubNav";

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
`;

const StyledLayoutHeader = styled(Header)`
  color: #000;
  background: #ffffff;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 0;
  height: auto;
  line-height: 50px;
  margin: auto;
  
  .main-nav-bar,
  .sub-nav-bar {
    padding: 0 140px;
  }
  .sub-nav-bar {
    background-color: #F8F5F0;
  }
  
  
  
  .branding {
    position: absolute;
    left: 30px;
    top: 10px;
    
    .branding-logo {
      display: flex;
      height: 110px;
      img {
        height: 100%;
        display: block;
      }
    }
  }
  
  .ant-menu-light {
    background: transparent;
    border: none;
  }

  .ant-menu-item-active {
    font-weight: 600;

    &&::after {
      border: none;
    }
  }
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-flow: row;
  height: auto;
  padding: 0 50px;
  width: 100%;
`;

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <StyledLayout>
            <StyledLayoutHeader>
                <div className="branding">
                    <div className="branding-logo">
                        <Link href="/">
                            <img src="/assets/images/logo-monkey.png" alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="nav-bar">
                    <div className="main-nav-bar">
                        <MainNav displayMode="horizontal" />
                    </div>
                    <div className="sub-nav-bar">
                        <SubNav displayMode="horizontal" />
                    </div>
                </div>
            </StyledLayoutHeader>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default RootLayout;