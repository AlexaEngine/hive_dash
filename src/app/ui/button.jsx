import clsx from 'clsx';

export function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none hover-scale', // Added hover-scale class
        'bg-[var(--secondary-color)] text-white hover:bg-yellow-600 active:bg-yellow-700 focus-visible:outline-yellow-500 fade-in', // Added fade-in class
        className
      )}
    >
      {children}
    </button>
  );
}
