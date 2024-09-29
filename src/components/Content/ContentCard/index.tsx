import styled from 'styled-components';
import Card from '../../Card';
import { ContentCardData } from '../../../types/content';
import DurationTag from './DurationTag';
import Typography from '../../Typography';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
	gap: 8px;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const IconContainer = styled.div`
	display: flex;
	height: 25px;
	overflow: hidden;
`;

const JobContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 4px 0;
	gap: 4px;
`;

const TitlesContainer = styled.div`
	display: flex;
	gap: 4px;
`;

const Bullet = styled.li`
	font-size: 1.1rem;
`;

type Props = {
	contentCardData: ContentCardData;
};

const ContentCard = ({ contentCardData }: Props) => {
	const { iconPath } = contentCardData;

	return (
		<Card>
			<Container>
				<TopContainer>
					<IconContainer>
						<img src={iconPath} />
					</IconContainer>

					<DurationTag text={contentCardData.duration} />
				</TopContainer>

				{contentCardData.jobs?.map(job => (
					<JobContainer key={job.title}>
						{job.title && (
							<TitlesContainer>
								<Typography variant='h3' weight='bold'>
									{job.title}
								</Typography>
							</TitlesContainer>
						)}

						{job.bullets?.map(bullet => (
							<Bullet key={bullet}>{bullet}</Bullet>
						))}
					</JobContainer>
				))}
			</Container>
		</Card>
	);
};

export default ContentCard;
