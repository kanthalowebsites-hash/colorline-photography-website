import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({children, variant='primary', className='', ...props}) => {
  const base = 'inline-flex items-center justify-center px-6 py-2 font-semibold transition';
  const styles = variant === 'primary'
    ? `${base} bg-gold text-forest hover:brightness-95`
    : `${base} bg-transparent border border-cream text-cream`;
  return (<button className={`${styles} ${className}`} {...props}>{children}</button>);
}

export default Button;
