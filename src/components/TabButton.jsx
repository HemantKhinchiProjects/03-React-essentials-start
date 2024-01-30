export default function TabButton({ children, onTabClicker, isSelected }) {
  return (
    <li>
      <button
        className={isSelected == true ? "active" : ""}
        onClick={onTabClicker}
      >
        {children}
      </button>
    </li>
  );
}
