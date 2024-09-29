import { useSkills } from '../../../hooks/contentCards';
import Card from '../../Card';
import Section from '../Section';

export const Skills = () => {
	const skills = useSkills();

	return (
		<Section title='Skills' direction='row'>
			{skills.map(skill => (
				<Card key={skill}>{skill}</Card>
			))}
		</Section>
	);
};
