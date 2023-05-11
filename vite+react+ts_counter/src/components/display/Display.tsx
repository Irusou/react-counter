import "./Display.css";

interface Props {
	display: number;
}

function Display({ display }: Props) {
	return <div>{display}</div>;
}

export default Display;
