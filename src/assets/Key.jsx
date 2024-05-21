let nums = "";

export default function Key({ value, setDisplayValue }) {
  const operators = ["+", "-", "*", "/", "."];

  function handleKey(e) {
    e.preventDefault();

    const btn = e.target.value;

    if (btn === "equals-to") {
      const result = new Function(`return ${nums}`)();
      setDisplayValue(result);
      nums = result.toString();
    } else if (btn === "reset") {
      setDisplayValue(0);
      nums = "";
    } else if (btn === "del") {
      nums = nums.slice(0, -1);
      setDisplayValue(nums);
    } else if (operators.includes(btn)) {
      if (nums === "") return;
      nums = nums.concat(btn);
      setDisplayValue(nums);
    } else {
      nums = nums.concat(Number(btn));
      setDisplayValue(nums);
    }
  }

  return (
    <button
      value={value === "x" ? "*" : value}
      className={value}
      onClick={handleKey}
    >
      {value === "equals-to" ? "=" : value}
    </button>
  );
}
