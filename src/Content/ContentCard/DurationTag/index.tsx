import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	border: 1px solid lightgrey;
	padding: 8px;
	border-radius: 6px;
`;

const Text = styled.span`
	font-size: 1.2rem;
	white-space: nowrap;
`;

type Props = {
	text: string;
};

const DurationTag = ({ text }: Props) => {
	return (
		<Container>
			<Text>{text}</Text>
		</Container>
	);
};

export default DurationTag;
