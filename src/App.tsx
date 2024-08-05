import styled from 'styled-components';
import Header from './Header';
import Content from './Content';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 24px;
	font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
	return (
		<Container>
			<Header />

			<Content />
		</Container>
	);
};

export default App;
