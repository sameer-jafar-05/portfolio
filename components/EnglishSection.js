const EnglishSection = () => {
  return (
    <section className="section">
      <div className="container section-header">
        <h2>Spoken English Resources</h2>
        <p>Here are some visual resources and posters for my English academy.</p>
      </div>

      <div className="container image-gallery" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <img src="images/1753554658027.jpg" alt="English Resource 1" style={{ width: '100%', borderRadius: '12px' }} />
        <img src="images/english2.jpg" alt="English Resource 2" style={{ width: '100%', borderRadius: '12px' }} />
        <img src="images/english3.png" alt="English Resource 3" style={{ width: '100%', borderRadius: '12px' }} />
        {/* Add more images as needed */}
      </div>
    </section>
  );
};