const EnglishSection = () => {
  const [showSentence, setShowSentence] = React.useState(false);

  const imageData = [
    { src: "images/english1.jpg", sentence: "Good morning! — A polite way to greet someone in the morning." },
    { src: "images/english2.jpg", sentence: "How are you? — A common way to start a conversation." },
    { src: "images/english3.jpg", sentence: "Can you help me? — Useful when asking for assistance." },
    { src: "images/english4.jpg", sentence: "Nice to meet you! — A friendly phrase when meeting someone new." }
  ];

  // Pick one random image only (runs once)
  const randomImage = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * imageData.length);
    return imageData[randomIndex];
  }, []);

  return (
    <section className="section">
      <div className="container section-header">
        <h2>Spoken English Tip</h2>
        <p>Tap the image to reveal the English phrase</p>
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <img
          src={randomImage.src}
          alt="English Tip"
          onClick={() => setShowSentence(true)}
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}
        />

        {showSentence && (
          <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#2563eb", fontWeight: "600" }}>
            🗣️ {randomImage.sentence}
          </p>
        )}
      </div>
    </section>
  );
};