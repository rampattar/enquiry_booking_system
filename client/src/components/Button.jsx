import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow';

  const variants = {
    primary: 'bg-sage-600 hover:bg-sage-700 text-white focus:ring-sage-500 border border-transparent shadow-sage-600/20',
    secondary: 'bg-beige-100 hover:bg-beige-200 text-charcoal-800 focus:ring-beige-300 border border-beige-300',
    accent: 'bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold focus:ring-gold-400 border border-transparent shadow-gold-500/20',
    outline: 'border border-sage-600 text-sage-700 hover:bg-sage-50 focus:ring-sage-400 bg-transparent',
    ghost: 'text-charcoal-700 hover:text-charcoal-900 hover:bg-beige-100/60 focus:ring-sage-400 bg-transparent shadow-none hover:shadow-none',
    whatsapp: 'bg-[#25D366] hover:bg-[#20ba59] text-white focus:ring-[#25D366] border border-transparent font-medium shadow-emerald-600/20',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

