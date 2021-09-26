import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handClick = () => onClick(value);
  return (
    <button onClick={handClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
