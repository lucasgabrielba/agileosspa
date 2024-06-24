import ErrorBoundary from "./ErrorBoundary";

export function Layout({ children, className = '' }) {
  return (
    <ErrorBoundary>
      <div className={`bg-secondary h-full w-full lg:rounded-sm clearfix overflow-auto ${className}`}>
        {children}
      </div>
    </ErrorBoundary>
  );
}

Layout.Header = function Header({ children, className = '' }) {
  return (
    <ErrorBoundary>
      <header className={`bg-primary h-1/4 w-full flex items-center justify-center p-5 ${className}`}>
        {children}
      </header>
    </ErrorBoundary>
  );
};

Layout.Aside = function Aside({ children, className = '' }) {
  return (
    <ErrorBoundary>
      <aside className={`bg-primary h-full w-1/5 float-left flex items-center justify-center ${className}`}>
        {children}
      </aside>
    </ErrorBoundary>
  );
};

Layout.Main = function Main({ children, className = '', withSidebar }) {
  return (
    <ErrorBoundary>
      <main className={`bg-tertiary h-3/4 ${withSidebar ? 'w-4/5 float-right' : 'w-full'} flex items-center justify-center overflow-auto ${className}`}>
        {children}
      </main>
    </ErrorBoundary>
  );
};

Layout.Footer = function Footer({ children, className = '' }) {
  return (
    <ErrorBoundary>
      <footer className={`bg-primary h-16 w-full flex items-center justify-center ${className}`}>
        {children}
      </footer>
    </ErrorBoundary>
  );
};