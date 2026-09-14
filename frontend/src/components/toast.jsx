function Toast({ message, type = "default", onClose }) {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>

      <button
        className="toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;