import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	font-family: Arial, Helvetica, sans-serif;
	gap: 12px;
	height: 1122px;
	width: 794px;
	overflow: hidden;
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
