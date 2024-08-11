import styled from 'styled-components';
import ContactCard from './ContactCard';
import { useContactCards } from '../../hooks/contactInfo';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4px;
	width: 100%;
`;

const ContactInfo = () => {
	const cards = useContactCards();

	return (
		<Container>
			{cards.map(card => (
				<ContactCard key={card.text} contactInfo={card} />
			))}
		</Container>
	);
};

export default ContactInfo;
