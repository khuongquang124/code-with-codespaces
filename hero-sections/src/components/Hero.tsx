import React from 'react';

export type HeroAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: HeroAction[];
  media?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  background?: 'plain' | 'grid' | 'radial' | 'image';
  imageUrl?: string;
};

function ActionButton({ action }: { action: HeroAction }) {
  const base = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-500 focus:ring-brand-400',
    secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/40',
  };
  const className = `${base} ${variants[action.variant || 'primary']}`;
  if (action.href) {
    return (
      <a href={action.href} className={className}>
        {action.label}
      </a>
    );
  }
  return (
    <button className={className} onClick={action.onClick}>
      {action.label}
    </button>
  );
}

export default function Hero({
  eyebrow,
  title,
  description,
  actions,
  media,
  align = 'left',
  background = 'plain',
  imageUrl,
}: HeroProps) {
  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  const bgClass =
    background === 'grid'
      ? 'bg-grid'
      : background === 'radial'
      ? 'bg-radial'
      : background === 'image' && imageUrl
      ? `bg-[url('${imageUrl}')] bg-cover bg-center`
      : '';

  return (
    <section className={`relative isolate overflow-hidden ${bgClass}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-black/60" />
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className={`mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center`}>
          <div className={`flex-1 flex flex-col gap-6 ${alignment}`}>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description && (
              <div className="max-w-2xl text-base text-white/80 sm:text-lg">
                {description}
              </div>
            )}
            {actions && actions.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {actions.map((a, idx) => (
                  <ActionButton key={idx} action={a} />
                ))}
              </div>
            )}
          </div>
          {media && (
            <div className="flex-1 flex justify-center">
              {media}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
