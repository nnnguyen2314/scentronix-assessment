import * as React from "react";
import useBreadcrumbPath from "@modules/shared/hooks/useBreadcrumbPath";
import {Breadcrumb} from "antd";
import Link from "next/link";

const customBreadcrumbs = () => {
    const breadcrumbPath = useBreadcrumbPath();

    return (
        <Breadcrumb style={{marginBottom: '1rem'}}>
            {breadcrumbPath.map((route, index) => (
                <Breadcrumb.Item key={index}>
                    <Link href={} />
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
};

export default customBreadcrumbs;