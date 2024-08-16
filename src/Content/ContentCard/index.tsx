import styled from 'styled-components';
import Card from '../../Card';
import { ContentCardData } from '../../types/content';
import { getHTMLBullet } from '../../tools/html';
import DurationTag from './DurationTag';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const IconContainer = styled.div`
	display: flex;
	height: 25px;
	overflow: hidden;
`;

const TitlesContainer = styled.div`
	display: flex;
	gap: 4px;
	margin-right: auto;
`;

const TitleText = styled.span`
	font-size: 1.4rem;
	white-space: nowrap;
	font-weight: bold;
`;

const BulletsContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding-left: 20px;
`;

const Bullet = styled.li`
	font-size: 1.3rem;
`;

type Props = {
	contentCardData: ContentCardData;
};

const ContentCard = ({ contentCardData }: Props) => {
	const { iconPath, duration, titles, bullets } = contentCardData;

	return (
		<Card>
			<Container>
				<TitleRow>
					<IconContainer>
						<img src={iconPath} />
					</IconContainer>

					<TitlesContainer>
						{titles?.map((title, idx) => (
							<TitleText key={title}>
								{idx !== 0 && getHTMLBullet()} {title}
							</TitleText>
						))}
					</TitlesContainer>

					<DurationTag text={duration} />
				</TitleRow>

				<ContentContainer>
					<BulletsContainer>
						{bullets?.map(bullet => (
							<Bullet key={bullet}>{bullet}</Bullet>
						))}
					</BulletsContainer>
				</ContentContainer>
			</Container>
		</Card>
	);
};

export default ContentCard;
