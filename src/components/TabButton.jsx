export default function TabButton({ children, onTabClicker }) {
  return (
    <li>
      <button onClick={onTabClicker}>{children}</button>
    </li>
  );
}
