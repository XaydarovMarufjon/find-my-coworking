import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as { statusText?: string; message?: string })?.statusText || (error as { statusText?: string; message?: string })?.message}</i>
      </p>
    </div>
  );
}
