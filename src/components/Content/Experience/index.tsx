import { useExperienceCards } from '../../../hooks/contentCards';
import ContentCard from '../ContentCard';
import Section from '../Section';

const Experience = () => {
	const cards = useExperienceCards();

	return (
		<Section title='Experience'>
			{cards.map(card => (
				<ContentCard key={card.iconPath} contentCardData={card}></ContentCard>
			))}
		</Section>
	);
};

export default Experience;
