import { useEducationCards } from '../../../hooks/contentCards';
import ContentCard from '../ContentCard';
import Section from '../Section';

const Education = () => {
	const cards = useEducationCards();

	return (
		<Section title='Education'>
			{cards.map(card => (
				<ContentCard key={card.iconPath} contentCardData={card}></ContentCard>
			))}
		</Section>
	);
};

export default Education;
