
function Container({ children }) {
  return (
    < div className="w-full bg-white p-4 rounded-3xl shadow flex flex-col min-h-0 overflow-hidden">
      {children}
    </div>
  )
}

export default Container;
