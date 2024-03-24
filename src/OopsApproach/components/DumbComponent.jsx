// Dumb Component (Presentational)
const MyComponent = ({ componentState, fetchData }) => {
  console.log(componentState);
  return (
    <div>
      {componentState.loading && <p>Loading...</p>}
      {componentState.data && <pre>{componentState.data.title}</pre>}
      {componentState.error && <p>Error: {componentState.error}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default MyComponent;
