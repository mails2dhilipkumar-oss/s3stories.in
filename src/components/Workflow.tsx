import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';
import { MessageCircle, Camera, Film, Sparkles } from 'lucide-react';
import './Workflow.css';

const steps = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    desc: 'Deep diving into your vision to plan the perfect cinematic coverage.',
  },
  {
    icon: Camera,
    title: 'Production',
    desc: 'Capturing candid moments with artistic precision and state-of-the-art gear.',
  },
  {
    icon: Film,
    title: 'Cinematic Craft',
    desc: 'Expert color grading and storytelling to bring your memories to life.',
  },
  {
    icon: Sparkles,
    title: 'Final Reveal',
    desc: 'Delivering your precious memories in premium formats to cherish forever.',
  },
];

export default function Workflow() {
  return (
    <section className="workflow section">
      <div className="container">
        <SectionTitle
          subtitle="Our Process"
          title="How We Work"
          description="From the first conversation to the final delivery — every step is crafted with care."
        />

        <div className="workflow__grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12}>
              <div className="workflow__step">
                <div className="workflow__icon-wrap">
                  <step.icon size={28} strokeWidth={1.5} className="workflow__icon" />
                </div>
                <span className="workflow__number">0{i + 1}</span>
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="workflow__connector" />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
