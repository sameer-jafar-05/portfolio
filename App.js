const App = () => {
  return (
    <div>
      <h1> Hello From React!</h1>
      <p>This react app runs without node.js! </p>
    </div>
  );
};

const root = ReactDOM.createRoot(doument.getElementById("root"));
root.render(<App />);
