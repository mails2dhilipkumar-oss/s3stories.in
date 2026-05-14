import WhatsAppIcon from './WhatsAppIcon';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/message/ESTIVO3PARGQO1?autoload=1&app_absent=0&utm_source=ig"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={30} className="whatsapp-btn__icon" />
      <span className="whatsapp-btn__tooltip">Chat with us</span>
    </a>
  );
}
