import React, { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <>
      <h1>Hero</h1>
      {children}
    </>
  );
}
