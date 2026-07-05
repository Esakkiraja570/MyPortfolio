import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: "esakkiraja0409@gmail.com",
      href: "mailto:esakkiraja0409@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8300264732",
      href: "tel:8300264732",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/esakki-raja-506b64200",
      href: "https://www.linkedin.com/in/esakki-raja-506b64200",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Esakkiraja570",
      href: "https://github.com/Esakkiraja570",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Kanyakumari, Tamil Nadu, India",
      href: null,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm open to opportunities — let's connect!
        </p>
      </div>

      <div className="contact-inner">
        {/* Left — Contact Info */}
        <div className="animate-fade-in-left">
          <h3 className="contact-info-title">Let's work together</h3>
          <p className="contact-info-desc">
            I'm actively looking for entry-level Software Developer roles. Whether
            you have a project idea, a job opportunity, or just want to say hi —
            feel free to reach out!
          </p>

          <div className="contact-links">
            {contactLinks.map((item) => (
              <div key={item.label} className="contact-link-item">
                <div className="contact-link-icon">{item.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: "#a78bfa", fontSize: "0.88rem" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.88rem" }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="animate-fade-in-right">
          <div className="contact-form-wrap">
            <h3 className="contact-form-title">Send a Message 💬</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message →
              </button>

              {success && (
                <p className="success-msg">✅ Message sent successfully! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
