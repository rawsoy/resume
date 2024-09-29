import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 12px 60px 0 60px;
	position: relative;
`;

const Image = styled.img`
	height: 28px;
	width: 28px;
`;

const Text = styled.span`
	font-size: 1.4rem;
	text-align: center;
	position: absolute;
	color: white;
	background: #7c7c7c;
	padding: 4px;
	border-radius: 4px;
	top: -12px;
	left: 20px;
	white-space: nowrap;
`;

const JobTitle = () => {
	return (
		<Container>
			<Image src='/assets/help2.png' />
			<Text>Senior Full Stack Developer</Text>;
		</Container>
	);
};

export default JobTitle;
