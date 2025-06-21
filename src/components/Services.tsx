
import React, { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications using the latest technologies.',
    icon: '🌐'
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps with intuitive user experiences and powerful functionality.',
    icon: '📱'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that delight users and drive engagement with your digital products.',
    icon: '🎨'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and services to power your business applications.',
    icon: '☁️'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated testing, deployment, and monitoring.',
    icon: '⚙️'
  },
  {
    title: 'AI Integration',
    description: 'Implement cutting-edge AI and machine learning capabilities to enhance your products.',
    icon: '🤖'
  }
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
