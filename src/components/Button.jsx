// src/components/Button.jsx
const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-md font-semibold
        bg-accent text-text shadow-accent
        hover:bg-primary hover:text-bg
        transition-colors duration-300 transform hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-accent/50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
