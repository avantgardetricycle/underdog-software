export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="mb-2 text-slate-900">Underdog Software</p>
            <p className="text-sm text-slate-500">
              Building practical software products since 2026
            </p>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Underdog Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
