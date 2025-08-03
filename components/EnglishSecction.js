const EnglishSection = () => {
  const [selectedSentence, setSelectedSentence] = React.useState(null);

  const images = [
    { src: "images/1753554658027.jpg", sentence: "This is a common greeting used in daily conversation." },
    { src: "images/english2.jpg", sentence: "Practice makes perfect in spoken English." },
    { src: "images/english3.jpg", sentence: "Speak confidently without worrying about grammar." },
    { src: "images/english4.jpg", sentence: "Try to think in English for faster fluency." },
  ];

  // Shuffle the array
  const shuffledImages = React.useMemo(() => {
    return [...images].sort(() => 0.5 - Math.random());
  }, []);

  const handleClick = (sentence) => {
    setSelectedSentence(sentence);
  };

  return (
    <section className="section">
      <div className="container section-header">
        <h2>Learn Spoken English</h2>
        <p>Tap an image to reveal a useful sentence tip</p>
      </div>

      <div className="container image-gallery" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {shuffledImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`English Tip ${index + 1}`}
            onClick={() => handleClick(item.sentence)}
            style={{ width: '100%', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          />
        ))}
      </div>

      {selectedSentence && (
        <div className="container" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.2rem', color: '#2563eb', fontWeight: '600' }}>
          🗣️ {selectedSentence}
        </div>
      )}
    </section>
  );
};