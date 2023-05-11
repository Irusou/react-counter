import { useState } from "react";
import Button from "../button/Button";
import Display from "../display/Display";

function Counter() {
	const [display, setDisplay] = useState(0);

	const addButton = () => {
		var value = display;
		setDisplay(++value);
	};

	const subButton = () => {
		var value = display;
		setDisplay(--value);
	};

	return (
		<div>
			<Display display={display} />
			<Button operand={"+"} onClick={addButton} />
			<Button operand={"-"} onClick={subButton} />
		</div>
	);
}

export default Counter;
