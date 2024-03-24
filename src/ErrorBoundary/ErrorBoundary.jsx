import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [, setError] = useState();

  function fetchData() {
    // Fetch data
    fetch("https://jsonplaceholder.typicode.com/toos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.url); // Throw the status text as the error message
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setMsg(json.title);
      })
      .catch((error) => {
        setError(() => {
          // Handle the error here
          console.error("Error fetching data:", error);
          throw error; // Pass the error to be caught by ErrorBoundary
        });
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{msg}</div>;
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function ErrorBoundaryExample() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}
