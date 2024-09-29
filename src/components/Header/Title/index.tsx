import styled from 'styled-components';
import JobTitle from './JobTitle';
import Typography from '../../Typography';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	/* justify-content: center; */
`;

const Name = styled(Typography)`
	/* text-align: center; */
`;

const Title = () => {
	return (
		<Container>
			<Name variant='h1' weight='bold' noWrap>
				Yoni Rawson
			</Name>
			<JobTitle />
		</Container>
	);
};

export default Title;
