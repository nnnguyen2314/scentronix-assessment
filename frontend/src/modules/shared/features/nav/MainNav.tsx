import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";

const StyledMainNav = styled.ul`
  display: flex;
  align-items: start;
  padding-left: 0;
  list-style: none;
  
  .main-nav-item {
    .main-nav-item-active {
      font-weight: 600;
    }
    
    a {
      padding: 5px 10px;
      color: #3E3E3E;
      text-transform: uppercase;
    }
  }
`

const menuItems = [
    {
        label: 'Shop',
        pathname: '/shop'
    },
    {
        label: 'Recipes',
        pathname: '/recipes'
    },
    {
        label: 'Learn',
        pathname: '/learn'
    },
    {
        label: 'About',
        pathname: '/about'
    },
    {
        label: 'Blog',
        pathname: '/blog'
    }
];

interface MainNavProps {
    displayMode: 'horizontal';
}

const MainNav = (props: MainNavProps) => {
    const router = useRouter();

    return (
        <StyledMainNav className="main-nav">
            {
                menuItems.map((item, index) => {
                    return (
                        <li key={index} className="main-nav-item">
                            <Link className={router.pathname === item.pathname ? 'main-nav-item-active' : ''} href={{
                                pathname: item.pathname
                            }}>{item.label}</Link>
                        </li>
                    )
                })
            }
        </StyledMainNav>
    )
};

export default MainNav;