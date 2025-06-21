import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Team', href: '/team' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#9CA3AF]/60 backdrop-blur-md rounded-2xl px-8 py-4 shadow-lg flex items-center gap-12">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-sm font-medium transition-colors relative ${
              location.pathname === item.href
                ? 'text-white'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {item.label}
            {location.pathname === item.href && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav; 