import styled from 'styled-components';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const Content = () => {
	return (
		<Container>
			<Experience />
			<Education />
			<Projects />
		</Container>
	);
};

export default Content;
