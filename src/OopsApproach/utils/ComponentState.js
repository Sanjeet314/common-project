// Utility class (Smart Logic)
export default class ComponentState {
  constructor() {
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
    this.url = ""; // Default URL
    this.listeners = new Set();
  }

  setUrl = (newUrl) => {
    this.url = newUrl;
  };

  subscribe = (listener) => {
    this.listeners.add(listener);
  };

  unsubscribe = (listener) => {
    this.listeners.delete(listener);
  };

  notify = () => {
    this.listeners.forEach((listener) => listener(this.state));
  };

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.notify();
  };
  //Define the method as an arrow function: If you define your method as an arrow function in the class property, it will automatically be bound to the instance.
  fetchData = () => {
    if (!this.url) return; // Ensure URL is set before fetching
    this.url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(
      Math.random() * 10
    )}`;
    this.setState({ loading: true });
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  };
}
