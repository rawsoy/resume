import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	background-color: red;
	padding: 8px;
	border-radius: 8px;
`;

const Text = styled.span`
	font-size: 12px;
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
