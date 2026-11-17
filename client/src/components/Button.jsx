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
  const baseStyles = 'inline-flex items-center justify-center font-medium font-nav tracking-normal transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow active:scale-[0.98]';

  const variants = {
    primary: 'bg-teal-700 hover:bg-teal-800 text-white focus:ring-teal-500 border border-transparent shadow-teal-glow hover:shadow-lg',
    secondary: 'bg-white hover:bg-aqua-100 text-teal-800 focus:ring-teal-400 border border-softgrey-200 shadow-soft',
    accent: 'bg-rose-400 hover:bg-rose-500 text-white font-semibold focus:ring-rose-400 border border-transparent shadow-rose-glow hover:shadow-lg',
    outline: 'border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white focus:ring-teal-500 bg-transparent',
    ghost: 'text-charcoal-700 hover:text-teal-800 hover:bg-aqua-100/60 focus:ring-teal-400 bg-transparent shadow-none hover:shadow-none',
    whatsapp: 'bg-[#25D366] hover:bg-[#20ba59] text-white focus:ring-[#25D366] border border-transparent font-medium shadow-md hover:shadow-lg',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
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
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
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
