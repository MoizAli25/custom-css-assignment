import './style.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, feel free to reach out to us!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
