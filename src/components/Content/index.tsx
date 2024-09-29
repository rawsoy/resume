import styled from 'styled-components';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import { Skills } from './Skills';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 0 1px;
`;

const Content = () => {
	return (
		<Container>
			<Experience />
			<Projects />
			<Education />
			<Skills />
		</Container>
	);
};

export default Content;
