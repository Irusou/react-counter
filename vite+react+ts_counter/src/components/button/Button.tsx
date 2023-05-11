import "./Button.css";

interface Props {
	operand: "+" | "-";
	onClick: () => void;
}

function Button({ operand, onClick }: Props) {
	return (
		<button className="counter-button" onClick={onClick}>
			{operand}
		</button>
	);
}

export default Button;
