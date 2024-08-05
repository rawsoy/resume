import styled from 'styled-components';
import Card from '../../Card';
import { ContentCardData } from '../../types/content';
import { getHTMLBullet } from '../../tools/html';
import DurationTag from './DurationTag';

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

const TitlesContainer = styled.div`
	display: flex;
	gap: 4px;
`;

const TitleText = styled.span`
	font-size: 14px;
	white-space: nowrap;
`;

const Bullet = styled.li`
	font-size: 12px;
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

				<TitlesContainer>
					{contentCardData.titles?.map((title, idx) => (
						<TitleText key={title}>
							{idx !== 0 && getHTMLBullet()} {title}
						</TitleText>
					))}
				</TitlesContainer>

				{contentCardData.bullets?.map(bullet => (
					<Bullet key={bullet}>{bullet}</Bullet>
				))}
			</Container>
		</Card>
	);
};

export default ContentCard;
