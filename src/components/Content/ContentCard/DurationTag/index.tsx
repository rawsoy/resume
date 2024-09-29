import styled from 'styled-components';
import Typography from '../../../Typography';

const Container = styled.div`
	display: flex;
	border: 1px solid grey;
	padding: 8px;
	border-radius: 6px;
`;

type Props = {
	text: string;
};

const DurationTag = ({ text }: Props) => {
	return (
		<Container>
			<Typography>{text}</Typography>
		</Container>
	);
};

export default DurationTag;
