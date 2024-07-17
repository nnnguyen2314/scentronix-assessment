import useRouterPath from "@modules/shared/hooks/useRouterPath";

const useBreadcrumbPath = () => {
    const route = useRouterPath();
    const removeQuestionMark = route.replace(/\?/g, '/');
    const removeEquals  = removeQuestionMark.replace(/=/g, '/');
    const transformedPath = removeEquals.replace(/\w+/g, (w) => {
        return `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`
    });

    return transformedPath.split('/');
};

export default useBreadcrumbPath;