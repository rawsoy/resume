import styled from 'styled-components';
import Card from '../../Card';
import { ContentCardData } from '../../../types/content';
import DurationTag from './DurationTag';
import Typography from '../../Typography';

const Container = styled.div<{ $isOneLiner?: boolean }>`
	display: flex;
	flex-direction: ${({ $isOneLiner }) => ($isOneLiner ? 'row' : 'column')};
	align-items: ${({ $isOneLiner }) => ($isOneLiner ? 'center' : undefined)};
	padding: 8px;
	gap: 8px;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const IconContainer = styled.div<{ $isOneLiner?: boolean }>`
	display: flex;
	height: ${({ $isOneLiner }) => ($isOneLiner ? '10px' : '20px')};
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
	isOneLiner?: boolean;
};

const ContentCard = ({ contentCardData, isOneLiner = false }: Props) => {
	const { iconPath } = contentCardData;

	return (
		<Card>
			<Container $isOneLiner={isOneLiner}>
				<TopContainer>
					<IconContainer $isOneLiner={isOneLiner}>
						<img src={iconPath} />
					</IconContainer>

					{!isOneLiner && <DurationTag text={contentCardData.duration} />}
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
