export function Dashboard() {
  return (
    <div className="bg-secondary h-full w-full rounded-sm clearfix overflow-hidden">

      <header className="bg-primary h-16 w-full flex items-center justify-center">
        <h1>Header</h1>
      </header>

      <aside className="bg-primary h-full w-1/5 float-left flex items-center justify-center">
        <h1>Menu</h1>
      </aside>

      <main className="bg-tertiary h-full w-4/5 float-right flex items-center justify-center">
        <h1>Conteúdo</h1>
      </main>

      <footer className="bg-primary h-16 w-full flex items-center justify-center">
        <h1>Footer</h1>
      </footer>

    </div>
  );
}
