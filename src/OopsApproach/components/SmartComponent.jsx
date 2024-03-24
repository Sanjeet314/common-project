import { useEffect, useRef, useState } from "react";
import ComponentState from "../utils/ComponentState";
import MyComponent from "./DumbComponent";

// Smart Component (Container)
const SmartComponent = () => {
  // Instance of the utility class
  //In this version, useRef is used to create a persistent reference to the ComponentState instance, which ensures that the same instance is used throughout the component’s lifecycle. This should help maintain the correct this context within the fetchData method.
  const stateManager = useRef(new ComponentState()).current;

  // Use a state hook to force re-render
  const [, forceUpdate] = useState();

  useEffect(() => {
    const listener = (newState) => {
      forceUpdate(newState);
    };

    stateManager.subscribe(listener);
    // Set the URL for fetching data
    stateManager.setUrl("https://jsonplaceholder.typicode.com/todos/1");
    console.log(stateManager);

    return () => {
      stateManager.unsubscribe(listener);
    };
  }, [stateManager]);

  return (
    <MyComponent
      componentState={stateManager.state}
      fetchData={stateManager.fetchData}
    />
  );
};

export default SmartComponent;
