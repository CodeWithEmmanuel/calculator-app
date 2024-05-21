import Key from "./Key";

export default function Keypad({ setDisplayValue }) {
  return (
    <div className="keypad">
      <div className="key-row">
        <Key value={7} setDisplayValue={setDisplayValue} />
        <Key value={8} setDisplayValue={setDisplayValue} />
        <Key value={9} setDisplayValue={setDisplayValue} />
        <Key value={"del"} setDisplayValue={setDisplayValue} />
      </div>

      <div className="key-row">
        <Key value={4} setDisplayValue={setDisplayValue} />
        <Key value={5} setDisplayValue={setDisplayValue} />
        <Key value={6} setDisplayValue={setDisplayValue} />
        <Key value={"+"} setDisplayValue={setDisplayValue} />
      </div>

      <div className="key-row">
        <Key value={1} setDisplayValue={setDisplayValue} />
        <Key value={2} setDisplayValue={setDisplayValue} />
        <Key value={3} setDisplayValue={setDisplayValue} />
        <Key value={"-"} setDisplayValue={setDisplayValue} />
      </div>

      <div className="key-row">
        <Key value={"."} setDisplayValue={setDisplayValue} />
        <Key value={0} setDisplayValue={setDisplayValue} />
        <Key value={"/"} setDisplayValue={setDisplayValue} />
        <Key value={"x"} setDisplayValue={setDisplayValue} />
      </div>

      <div className="key-row">
        <Key value={"reset"} setDisplayValue={setDisplayValue} />
        <Key value={"equals-to"} setDisplayValue={setDisplayValue} />
      </div>
    </div>
  );
}
