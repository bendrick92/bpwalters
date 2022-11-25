import React from 'react';

const Button = ({ type, href, target, onClick, children }) => {
  const classes = 'px-5 py-3 bg-blue-600 hover:bg-blue-500 text-zinc-200 rounded-3xl text-sm no-underline';

  if (href) {
    return (
      <a href={href} target={target} rel='noreferrer' className={classes}>
        {children}
      </a>
    );
  }
  else if (onClick) {
    return (
      <button type={type ?? 'button'} onClick={() => onClick()} className={classes}>
        {children}
      </button>
    );
  }
  else {
    return (
      <button className={classes}>
        {children}
      </button>
    );
  }
};

export default Button;