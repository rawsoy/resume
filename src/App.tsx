import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 24px;
	font-family: Arial, Helvetica, sans-serif;
	gap: 24px;
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
