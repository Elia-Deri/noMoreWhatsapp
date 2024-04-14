import { useRouteError } from "react-router-dom";

export function NotFoundError() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Wow, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message || "unknown little buggo"}</i>
      </p>
    </div>
  );
}
