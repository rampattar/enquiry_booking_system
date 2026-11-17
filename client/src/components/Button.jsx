import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  showDot = true,
  showArrow = false,
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles = 'group inline-flex items-center justify-center font-semibold font-nav uppercase tracking-wider transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] select-none';

  const variants = {
    // Signature Medical Cyan from user reference (Image 2 & 3)
    primary: 'bg-[#48B6B7] hover:bg-[#3AA3A4] text-white focus:ring-[#48B6B7] border border-transparent shadow-cyan-glow hover:shadow-lg',
    cyan: 'bg-[#48B6B7] hover:bg-[#3AA3A4] text-white focus:ring-[#48B6B7] border border-transparent shadow-cyan-glow hover:shadow-lg',
    // Signature Deep Navy Blue from user reference
    navy: 'bg-[#0E3854] hover:bg-[#134B6E] text-white focus:ring-[#0E3854] border border-transparent shadow-navy-glow hover:shadow-lg',
    // White Pill with Navy Text (Image 1 Call Now)
    white: 'bg-white hover:bg-cyan-50 text-[#0E3854] focus:ring-[#48B6B7] border border-softgrey-200 shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-cyan-50 text-[#0E3854] focus:ring-[#48B6B7] border border-softgrey-300 shadow-soft',
    outline: 'border-2 border-[#48B6B7] text-[#2E8485] hover:bg-[#48B6B7] hover:text-white focus:ring-[#48B6B7] bg-transparent',
    ghost: 'text-[#0E3854] hover:text-[#48B6B7] hover:bg-cyan-50 focus:ring-[#48B6B7] bg-transparent shadow-none',
    whatsapp: 'bg-[#25D366] hover:bg-[#20ba59] text-white focus:ring-[#25D366] border border-transparent shadow-md hover:shadow-lg',
  };

  const sizes = {
    sm: 'text-[11px] py-1.5 px-3.5 gap-2',
    md: 'text-xs py-2.5 px-5 gap-2.5',
    lg: 'text-xs sm:text-sm py-3.5 px-7 gap-3 font-bold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const renderIconBadge = () => {
    if (Icon) {
      return (
        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 -ml-1 transition-transform group-hover:scale-110">
          <Icon className="w-3 h-3" />
        </span>
      );
    }
    if (showDot) {
      return (
        <span className="w-2.5 h-2.5 rounded-full bg-white/80 shrink-0 -ml-0.5 group-hover:scale-125 transition-transform" />
      );
    }
    return null;
  };

  const content = (
    <>
      {renderIconBadge()}
      <span>{children}</span>
      {showArrow && (
        <ChevronRight className="w-3.5 h-3.5 shrink-0 -mr-1 transition-transform duration-200 group-hover:translate-x-1" />
      )}
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
