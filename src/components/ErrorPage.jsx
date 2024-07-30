import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return <div>Oh, ada Error!</div>;
};

export default ErrorPage;
