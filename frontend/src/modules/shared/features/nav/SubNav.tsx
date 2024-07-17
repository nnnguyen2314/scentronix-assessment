import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";

const StyledSubNav = styled.ul`
  display: flex;
  align-items: start;
  padding-left: 0;
  list-style: none;
  
  .sub-nav-item {
    .sub-nav-item-active {
      font-weight: 600;
    }
    
    a {
      padding: 5px;
      color: #3E3E3E;
      text-transform: uppercase;
    }
  }
`

const menuItems = [
    {
        label: 'Categories',
        pathname: '/categories'
    },
    {
        label: 'Collections',
        pathname: '/Collections'
    },
    {
        label: 'resources',
        pathname: '/resources'
    }
];

interface SubNavProps {
    displayMode: 'horizontal';
}

const SubNav = (props: SubNavProps) => {
    const router = useRouter();

    return (
        <StyledSubNav className="sub-nav">
            {
                menuItems.map((item, index) => {
                    return (
                        <li key={index} className="sub-nav-item">
                            <Link className={router.pathname === item.pathname ? 'sub-nav-item-active' : ''} href={{
                                pathname: item.pathname
                            }}>{item.label}</Link>
                        </li>
                    )
                })
            }
        </StyledSubNav>
    )
};

export default SubNav;