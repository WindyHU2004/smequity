export default function Toast({ message, onClose }) {
  if (!message) return null
  return (
    <div className="toast">
      <span>{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Dismiss">✕</button>
    </div>
  )
}
