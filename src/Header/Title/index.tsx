import styled from 'styled-components';
import JobTitle from './JobTitle';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
`;

const Name = styled.span`
	font-size: 3.2rem;
	font-weight: bold;
	text-align: center;
`;

const Title = () => {
	return (
		<Container>
			<Name>Yoni Rawson</Name>
			<JobTitle />
		</Container>
	);
};

export default Title;
