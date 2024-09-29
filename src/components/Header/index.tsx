import styled from 'styled-components';
import Title from './Title';
import ContactInfo from './ContactInfo';

const Container = styled.div`
	display: flex;
	width: 100%;
	gap: 24px;
`;

const Header = () => {
	return (
		<Container>
			<Title />
			<ContactInfo />
		</Container>
	);
};

export default Header;
