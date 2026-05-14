import ScrollReveal from './ScrollReveal';
import './SectionTitle.css';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  noMargin?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  noMargin = false,
}: SectionTitleProps) {
  return (
    <ScrollReveal>
      <div className={`section-title ${align === 'left' ? 'section-title--left' : ''} ${noMargin ? 'section-title--no-margin' : ''}`}>
        {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
        <h2 className="section-title__heading">{title}</h2>
        <div className="section-title__line" />
        {description && <p className="section-title__desc">{description}</p>}
      </div>
    </ScrollReveal>
  );
}
