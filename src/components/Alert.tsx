export function Alert(message: any) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-2 z-40 mb-3"
      role="alert"
    >
      {message.message}
    </div>
  )
}
