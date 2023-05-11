interface Props {
	operand: "+" | "-";
	onClick: () => void;
}

function Button({ operand, onClick }: Props) {
	return <button onClick={onClick}>{operand}</button>;
}

export default Button;
