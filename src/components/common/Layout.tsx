export function Layout({ children, className = '' }) {
  return (
    <div className={`bg-secondary h-full w-full lg:rounded-sm clearfix overflow ${className}`}>
      {children}
    </div>
  );
}

Layout.Header = function Header({ children, className = '' }) {
  return (
    <header className={`bg-primary h-16 w-full flex items-center justify-center ${className}`}>
      {children}
    </header>
  );
};

Layout.Aside = function Aside({ children, className = '' }) {
  return (
    <aside className={`bg-primary h-full w-1/5 float-left flex items-center justify-center ${className}`}>
      {children}
    </aside>
  );
};

Layout.Main = function Main({ children, className = '', withSidebar }) {
  return (
    <main className={`bg-tertiary h-full ${withSidebar ? 'w-4/5 float-right' : 'w-full'} flex items-center justify-center ${className}`}>
      {children}
    </main>
  );
};

Layout.Footer = function Footer({ children, className = '' }) {
  return (
    <footer className={`bg-primary h-16 w-full flex items-center justify-center ${className}`}>
      {children}
    </footer>
  );
};