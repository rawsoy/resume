import styled from 'styled-components';
import JobTitle from './JobTitle';
import Typography from '../../Typography';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Title = () => {
	return (
		<Container>
			<Typography variant='h1' weight='bold' noWrap>
				Yoni Rawson
			</Typography>
			<JobTitle />
		</Container>
	);
};

export default Title;
