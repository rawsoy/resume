import styled from 'styled-components';
import Card from '../../../Card';
import { ContactInfo } from '../../../../types/contact';
import Typography from '../../../Typography';

const Container = styled.a`
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;
	color: black;
	padding: 0 8px;
	height: 100%;
`;

const IconContainer = styled.div`
	display: flex;
	height: 15px;
	overflow: hidden;
`;

type Props = {
	contactInfo: ContactInfo;
};

const ContactCard = ({ contactInfo }: Props) => {
	const { icon, text, link } = contactInfo;

	return (
		<Card size='sm'>
			<Container href={link} target='_blank'>
				<IconContainer>{icon}</IconContainer>

				<Typography noWrap variant='paragraph'>
					{text}
				</Typography>
			</Container>
		</Card>
	);
};

export default ContactCard;
