export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
      <button type="button" onClick={onDecrement}>
        -1
      </button>
    </div>
  );
}
