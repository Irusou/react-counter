import "./Display.css";

interface Props {
	display: number;
}

function Display({ display }: Props) {
	return <div className="counter-display">{display}</div>;
}

export default Display;
