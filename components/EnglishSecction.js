const EnglishSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [showSentence, setShowSentence] = React.useState(false);

  // ✅ Replace these with your own image paths and sentences
  const images = [
    {
      src: "images/apple.jpg",
      sentence: "This is a red apple.",
    },
    {
      src: "images/dog.jpg",
      sentence: "The dog is playing in the garden.",
    },
    {
      src: "images/book.jpg",
      sentence: "I am reading an interesting book.",
    },
    {
      src: "images/bus.jpg",
      sentence: "The school bus arrives at 8 AM.",
    },
    {
      src: "images/cat.jpg",
      sentence: "The cat is sleeping on the sofa.",
    },
  ];

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  }, []);

  if (currentIndex === null) return null;

  const handleClick = () => {
    setShowSentence(true);
  };

  return (
    <div className="english-section" style={{ textAlign: "center", padding: "20px" }}>
      <img
        src={images[currentIndex].src}
        alt="English visual"
        onClick={handleClick}
        style={{
          width: "220px",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      {showSentence && (
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#333" }}>
          {images[currentIndex].sentence}
        </p>
      )}
    </div>
  );
};