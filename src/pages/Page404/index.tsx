import React from "react";
import { useRouteError } from "react-router-dom";
import { Page404Container } from "./Page404.styles";

const Page404: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Page404Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Page404Container>
  );
};

export default Page404;
