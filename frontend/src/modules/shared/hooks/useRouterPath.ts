import {useRouter} from "next/router";

const useRouterPath = () => {
  const router = useRouter();
  return router.pathname;
};

export default useRouterPath;