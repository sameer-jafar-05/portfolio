const ContactSection = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
          <p>Let’s connect and collaborate</p>
        </div>
        <div className="contact-content">
          <form className="contact-form" action="mailto:sameer@example.com" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};