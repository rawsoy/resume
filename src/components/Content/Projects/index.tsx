import { useProjectsCards } from '../../../hooks/contentCards';
import ContentCard from '../ContentCard';
import Section from '../Section';

const Projects = () => {
	const cards = useProjectsCards();

	return (
		<Section title='Projects' direction='row'>
			{cards.map(card => (
				<ContentCard key={card.iconPath} contentCardData={card} />
			))}
		</Section>
	);
};

export default Projects;
