const EnglishSection = () => {
  const [showText, setShowText] = React.useState(false);

  return (
    <div className="english-section" style={{ textAlign: "center", padding: "20px" }}>
      <h3>Click the image to see the sentence</h3>
      <img
        src="images/apple.jpg"
        alt="Apple"
        onClick={() => setShowText(true)}
        style={{ width: "200px", borderRadius: "10px", cursor: "pointer" }}
      />
      {showText && (
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          This is a red apple.
        </p>
      )}
    </div>
  );
};