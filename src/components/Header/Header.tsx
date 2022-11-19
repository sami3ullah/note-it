
function Header() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-7 py-2 h-15 bg-foreground shadow-sm">
      <div className="flex items-center gap-3">
        {/* menu */}
        <button className="rounded-full w-10 h-10 hover:bg-hover flex items-center justify-center transition-all">
          <div className="space-y-2">
            <span className="block w-7 h-1 bg-secondary bg-opacity-60"></span>
            <span className="block w-7 h-1 bg-secondary bg-opacity-60"></span>
          </div>
        </button>
        <div className="font-bold text-2xl">Note it</div>
      </div>
      <div className="text-lg flex items-center justify-center uppercase h-10 w-10 rounded-full bg-tertiary bg-opacity-40">
        MS
      </div>
    </nav>
  )
}

export default Header