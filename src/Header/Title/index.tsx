import styled from 'styled-components';

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

const JobTitle = styled.span`
	font-size: 1.6rem;
	text-align: center;
`;

const Title = () => {
	return (
		<Container>
			<Name>Yoni Rawson</Name>
			<JobTitle>Senior Full Stack Developer</JobTitle>
		</Container>
	);
};

export default Title;
