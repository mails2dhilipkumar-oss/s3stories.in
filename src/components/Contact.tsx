import { useState } from 'react';
import type { FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import { Mail, MapPin, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './Contact.css';

interface ContactProps {
  isHomePage?: boolean;
}

export default function Contact({ isHomePage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = '917207202302'; // Official S3 Stories WhatsApp Number

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*New Enquiry from S3 Stories Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event Type:* ${formData.eventType}%0A` +
      `*Date:* ${formData.date || 'Not specified'}%0A%0A` +
      `*Message:* ${formData.message || 'No additional message'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact section" style={isHomePage ? { paddingTop: '1rem' } : undefined}>
      <div className="container">
        <SectionTitle
          subtitle="Enquire Now"
          title="Let's Tell Your Story"
          description="Looking for a candid wedding photographer in Coimbatore? Drop us a line and let's craft something unforgettable."
        />

        <div className="contact__grid">
          <ScrollReveal direction="right" className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-desc">
              Whether you are planning a grand South Indian wedding, an intimate baby shoot, or a commercial project, we would love to hear from you.
            </p>

            <div className="contact__details">
              <a href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="contact__detail-item">
                <div className="contact__icon-wrap">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <span className="contact__label">WhatsApp / Call</span>
                  <span className="contact__value">+91 72072 02302</span>
                </div>
              </a>

              <a href="mailto:storiesfroms3@gmail.com" className="contact__detail-item">
                <div className="contact__icon-wrap">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="contact__label">Email Us</span>
                  <span className="contact__value">storiesfroms3@gmail.com</span>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/8u9jYPyB8cZvBWiL8" target="_blank" rel="noopener noreferrer" className="contact__detail-item">
                <div className="contact__icon-wrap">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="contact__label">Studio Location</span>
                  <span className="contact__value">21, Rajiv Gandhi St, Phase-ii, Sowri Palayam, Coimbatore 641028</span>
                </div>
              </a>
            </div>

            {/* Local SEO content dynamically displayed elegantly */}
            <div className="contact__seo-box">
              <span className="contact__seo-title">Available for shoots across:</span>
              <p className="contact__seo-places">
                Coimbatore · Chennai · Erode · Tiruppur · Salem · Madurai · Ooty
              </p>
              <div className="contact__seo-divider"></div>
              <p className="contact__seo-region">Also available across Entire Tamil Nadu</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="contact__form-wrapper">
            <form onSubmit={handleSubmit} className="contact__form">
              <h3 className="contact__form-title">Send an Enquiry</h3>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="form-input"
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventType" className="form-label">Event / Shoot Type</label>
                  <select
                    id="eventType"
                    className="form-input form-select"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="Wedding">Wedding Photography</option>
                    <option value="Pre-Wedding">Pre-Wedding / Engagement</option>
                    <option value="Baby">Baby Shoot</option>
                    <option value="Maternity">Maternity Session</option>
                    <option value="Product">Product / Commercial</option>
                    <option value="Car">Car Photography</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">Tentative Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Tell us about your story</label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input form-textarea"
                  placeholder="Locations, specific requirements, or ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary contact__submit">
                <Send size={18} />
                Submit Enquiry
              </button>

              {submitted && (
                <div className="form-success">
                  Thank you! Your enquiry has been received. We will connect with you shortly.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
