const App = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>This React app runs without Node.js!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
