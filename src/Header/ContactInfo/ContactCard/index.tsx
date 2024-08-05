import styled from 'styled-components';
import Card from '../../../Card';
import { ContactInfo } from '../../../types/contact';

const Container = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	text-decoration: none;
	color: black;
`;

const IconContainer = styled.div`
	display: flex;
	height: 20px;
	overflow: hidden;
`;

const Text = styled.span`
	font-size: 14px;
`;

type Props = {
	contactInfo: ContactInfo;
};

const ContactCard = ({ contactInfo }: Props) => {
	const { icon, text, link } = contactInfo;

	return (
		<Card>
			<Container href={link} target='_blank'>
				<IconContainer>{icon}</IconContainer>

				<Text>{text}</Text>
			</Container>
		</Card>
	);
};

export default ContactCard;
